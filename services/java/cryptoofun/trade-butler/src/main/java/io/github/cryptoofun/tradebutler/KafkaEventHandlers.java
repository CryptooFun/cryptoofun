package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.messages.events.TradeOrderCancelledEvent;
import io.github.cryptoofun.messages.events.TradeOrderProcessedEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@Slf4j
public class KafkaEventHandlers {

    @Autowired
    private OrderRepository orderRepository;

    @KafkaListener(topics = "processed_trade_orders", groupId = "trade-butlers")
    private void handleTradeOrderProcessedEvent(TradeOrderProcessedEvent event) {
        log.info("[processed_trade_orders] Consumed: " + event);
        try {
            orderRepository.findByIdAndUserID(event.getOrderID(), event.getUserID())
                    .ifPresentOrElse(order -> {
                        order.setActualizationPrice(event.getActualizationPrice());
                        order.setProcessed(true);
                        order.setUpdatedAt(Instant.now());
                        orderRepository.save(order);
                    }, () -> log.error("unable to find order for [event] " + event));
        } catch (Exception e) {
            log.error(e + "\n[event] " + event.toString());
            throw e;
        }
    }

    @KafkaListener(topics = "cancelled_trade_orders", groupId = "trade-butlers")
    private void handleTradeOrderCancelledEvent(TradeOrderCancelledEvent event) {
        log.info("[cancelled_trade_orders] Consumed: " + event);
        try {
            orderRepository.findByIdAndUserID(event.getOrderID(), event.getUserID())
                    .ifPresentOrElse(order -> {
                        order.setCancelled(true);
                        order.setUpdatedAt(Instant.now());
                        orderRepository.save(order);
                    }, () -> log.error("unable to find order for [event] " + event));
        } catch (Exception e) {
            log.error(e + "\n[event] " + event.toString());
            throw e;
        }
    }
}
