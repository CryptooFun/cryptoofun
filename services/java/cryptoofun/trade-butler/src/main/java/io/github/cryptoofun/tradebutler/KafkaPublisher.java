package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.messages.events.TradeOrderProcessedEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class KafkaPublisher {

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

//    public void sendMessageForHello(String message) {
//        var future = kafkaTemplate.send("hello_messages", message).completable();
//        future.whenComplete((result, ex) -> {
//            if (ex == null) {
//                System.out.println("Sent message=[" + message +
//                        "] with offset=[" + result.getRecordMetadata().offset() + "]");
//            } else {
//                System.out.println("Unable to send message=[" +
//                        message + "] due to : " + ex.getMessage());
//            }
//        });
//    }

    public void sendMessageForProcessedTradeOrders(@NonNull TradeOrderProcessedEvent message) {
        kafkaTemplate.send("processed_trade_orders", message);
    }

}
