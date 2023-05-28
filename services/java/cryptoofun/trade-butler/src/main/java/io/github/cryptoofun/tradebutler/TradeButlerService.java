package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.messages.commands.ProcessTradeOrderCommand;
import io.github.cryptoofun.tradebutler.entity.Order;
import io.github.cryptoofun.tradebutler.exception.CommandServiceException;
import lombok.Builder;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class TradeButlerService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    KafkaPublisher kafkaPublisher;

    @Data
    @Builder
    public static class NewOrderRequest {
        private final String userID;
        private final String orderType;
        private final String intent;
        private final String ticker;
        private final double price;
        private final double amount;
    }

    /**
     * Create new trade order and return order ID.
     */
    public String NewOrder(NewOrderRequest orderRequest) throws CommandServiceException {
        try {
            var orderType = ProcessTradeOrderCommand.OrderType.valueOf(orderRequest
                    .getOrderType().toUpperCase());
            var intent = ProcessTradeOrderCommand.Intent.valueOf(orderRequest
                    .getIntent().toUpperCase());

            var orderID = UUID.randomUUID().toString();
            // TODO: May utilize object mapping for less hustle.
            orderRepository.save(Order.builder()
                    .id(orderID)
                    .userID(orderRequest.getUserID())
                    .orderType(orderRequest.getOrderType())
                    .intent(orderRequest.getIntent())
                    .ticker(orderRequest.getTicker())
                    .price(orderRequest.getPrice())
                    .amount(orderRequest.getAmount())
                    .processed(false)
                    .cancelled(false)
                    .createdAt(Instant.now())
                    .build());
            kafkaPublisher.sendProcessTradeOrderCommandBlocking(
                    new ProcessTradeOrderCommand(
                            orderID,
                            orderRequest.getUserID(),
                            orderType,
                            intent,
                            orderRequest.getTicker(),
                            orderRequest.getPrice(),
                            orderRequest.getAmount()
                    ));
            return orderID;
        } catch (IllegalArgumentException e) {
            throw new CommandServiceException(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            log.error(e.getCause().toString());
            throw new CommandServiceException("", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Data
    @Builder
    public static class RetrieveOrdersByUserRequest {
        private final String userID;
        private final Date dateAfter;
        private final String tickerFilter;
    }

    /**
     * Return all trade orders owned by a user.
     */
    public List<Order> RetrieveOrdersByUser(RetrieveOrdersByUserRequest request) throws CommandServiceException {
        LocalDate lastWeekLocal = LocalDate.now().minusWeeks(1);
        Date lastWeek = Date.from(lastWeekLocal.atStartOfDay(ZoneId.systemDefault()).toInstant());

        if (request.getDateAfter().before(lastWeek)) {
            throw new CommandServiceException("Cannot view trade orders older than 1 week", HttpStatus.BAD_REQUEST);
        }

        try {
            if (request.getTickerFilter().isBlank()) {
                return orderRepository.findByUserIDAndCreatedAtAfter(request.getUserID(), request.getDateAfter())
                        .stream()
                        .sorted(Comparator.comparing(Order::getCreatedAt).reversed())
                        .toList();
            }
            return orderRepository
                    .findByUserIDAndTickerAndCreatedAtAfter(request.getUserID(), request.getTickerFilter(), request.getDateAfter())
                    .stream()
                    .sorted(Comparator.comparing(Order::getCreatedAt).reversed())
                    .toList();
        } catch (Exception e) {
            log.error(e.getCause().toString());
            throw new CommandServiceException("", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
