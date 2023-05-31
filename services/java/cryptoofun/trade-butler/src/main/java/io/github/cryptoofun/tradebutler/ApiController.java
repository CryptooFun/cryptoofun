package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.tradebutler.dto.PostOrderRequest;
import io.github.cryptoofun.tradebutler.entity.Order;
import io.github.cryptoofun.tradebutler.exception.CommandServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class ApiController {

    @Autowired
    private TradeButlerService tradeButlerCommandService;

    @PostMapping("/")
    public Order postOrder(@RequestAttribute(value = JwtMiddlewareNoVerify.UserIdAttrKey) String userID,
                                 @RequestBody PostOrderRequest request) throws CommandServiceException {

        // TODO: May utilize object mapping for less hustle.
        return tradeButlerCommandService.NewOrder(TradeButlerService.NewOrderRequest.builder()
                .userID(userID)
                .orderType(request.getOrderType())
                .intent(request.getIntent())
                .ticker(request.getTicker())
                .price(request.getPrice())
                .amount(request.getAmount())
                .build());
    }

    @GetMapping("/")
    public List<Order> getOrders(@RequestAttribute(value = JwtMiddlewareNoVerify.UserIdAttrKey) String userID,
                                 @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date dateAfter,
                                 @RequestParam(defaultValue = "") String ticker) throws CommandServiceException {

        return tradeButlerCommandService.RetrieveOrdersByUser(TradeButlerService.RetrieveOrdersByUserRequest.builder()
                .userID(userID)
                .dateAfter(dateAfter)
                .tickerFilter(ticker)
                .build());
    }
}
