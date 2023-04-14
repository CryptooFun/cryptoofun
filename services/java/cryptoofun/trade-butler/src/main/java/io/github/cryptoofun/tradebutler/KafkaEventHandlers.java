package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.messages.events.TradeOrderProcessedEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class KafkaEventHandlers {

    @KafkaListener(topics = "processed_trade_orders", groupId = "butlers")
    private void handleTradeOrderProcessedEvent(TradeOrderProcessedEvent event) {
        System.out.println(event.toString());
    }
}
