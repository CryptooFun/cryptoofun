package io.github.cryptoofun.orderprocesssor;

import io.github.cryptoofun.messages.events.TradeOrderCancelledEvent;
import io.github.cryptoofun.messages.events.TradeOrderProcessedEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

@Service
public class KafkaPublishers {

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

    public void sendBlocking(@NonNull TradeOrderProcessedEvent message) {
        kafkaTemplate.send("processed_trade_orders", message);
    }

    public void sendBlocking(@NonNull TradeOrderCancelledEvent message) {
        kafkaTemplate.send("cancelled_trade_orders", message);
    }
}
