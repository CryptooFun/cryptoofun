package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.messages.commands.ProcessTradeOrderCommand;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.util.concurrent.ListenableFuture;

import java.util.concurrent.CompletableFuture;

@Service
@Slf4j
public class KafkaPublisher {

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

    @Autowired
    private OrderRepository orderRepository;

    /**
     * @deprecated
     */
    public void sendProcessTradeOrderCommandBlocking(@NonNull ProcessTradeOrderCommand message) {
        kafkaTemplate.send("new_trade_orders", message);
        log.info("[new_trade_orders] Sent: " + message);
    }

    public void sendProcessTradeOrderCommand(@NonNull ProcessTradeOrderCommand message) {
        ListenableFuture<SendResult<String, Object>> future = kafkaTemplate.send("new_trade_orders", message);

        future.addCallback(result -> log.info("[new_trade_orders] Sent: " + message), ex -> {
            log.error("[new_trade_orders] Failed to send: " + message + " [Reason]: " + ex);

            // TODO: For sake of simplicity, just cancels the order. In reality, you would handle such cases with retries.
            orderRepository.findByIdAndUserID(message.getOrderID(), message.getUserID())
                    .ifPresent(order -> {
                        order.setCancelled(true);
                        orderRepository.save(order);
                    });
        });
    }
}
