package io.github.cryptoofun.tradebutler;

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
        orderRepository.findById(event.getOrderID())
                .ifPresent(order -> {
                    order.setActualizationPrice(event.getActualizationPrice());
                    order.setProcessed(true);
                    order.setUpdatedAt(Instant.now());
                    orderRepository.save(order);
                });
    }

    @KafkaListener(topics = "cancelled_trade_orders", groupId = "trade-butlers")
    private void handleTradeOrderCancelledEvent(TradeOrderProcessedEvent event) {
        orderRepository.findById(event.getOrderID())
                .ifPresent(order -> {
                    order.setCancelled(true);
                    order.setUpdatedAt(Instant.now());
                    orderRepository.save(order);
                });
    }
}
