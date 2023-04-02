package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.messages.events.TradeOrderProcessedEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @Autowired
    private KafkaPublisher kafkaPublisher;

    @RequestMapping("/")
    public void createMessageToTopic() {
        kafkaPublisher.sendMessageForProcessedTradeOrders(
                new TradeOrderProcessedEvent("XU100_TRY", 7000.2539d));
    }

}
