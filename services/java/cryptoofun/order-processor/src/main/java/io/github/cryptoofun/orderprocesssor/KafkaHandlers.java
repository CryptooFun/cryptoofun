package io.github.cryptoofun.orderprocesssor;

import io.github.cryptoofun.genproto.CashWalletServiceGrpc;
import io.github.cryptoofun.genproto.ModifyCashBalanceRequest;
import io.github.cryptoofun.messages.commands.ProcessTradeOrderCommand;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaHandlers {

    @GrpcClient(value = "cash-wallet-server")
    CashWalletServiceGrpc.CashWalletServiceBlockingStub cashWalletGrpcStub;

    @Autowired
    KafkaPublishers kafkaPublishers;

    @KafkaListener(topics = "new_trade_orders", groupId = "order-processors")
    private void handleCommand(ProcessTradeOrderCommand command) {

        // TODO ::>
        // log.info("[new_trade_order] :: " + command.getOrderID());

        double cashReserved = command.getPrice() * command.getAmount();
        cashWalletGrpcStub.modifyCashBalance(ModifyCashBalanceRequest.newBuilder()
                .setUserId(command.getUserID())
                .setDelta(-1 * cashReserved)
                .build());
        // kafkaPublishers.sendBlocking(new TradeOrderProcessedEvent(command.getOrderID(), 150.00));
    }
}
