package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.messages.commands.ProcessTradeOrderCommand;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class KafkaPublisher {

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

    public void sendProcessTradeOrderCommandBlocking(@NonNull ProcessTradeOrderCommand message) {
        kafkaTemplate.send("new_trade_orders", message);
        log.info("[new_trade_orders] Sent: " + message);
    }
}
