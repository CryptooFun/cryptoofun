package io.github.cryptoofun.hellosvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
public class KafkaPublisher {

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void sendMessageForHello(String message) {
        var future = kafkaTemplate.send("hello_messages", message).completable();
        future.whenComplete((result, ex) -> {
            if (ex == null) {
                System.out.println("Sent message=[" + message +
                        "] with offset=[" + result.getRecordMetadata().offset() + "]");
            } else {
                System.out.println("Unable to send message=[" +
                        message + "] due to : " + ex.getMessage());
            }
        });
    }

}
