package io.github.cryptoofun.orderprocesssor;

import io.github.cryptoofun.genproto.*;
import io.github.cryptoofun.messages.commands.ProcessTradeOrderCommand;
import io.github.cryptoofun.messages.events.TradeOrderCancelledEvent;
import io.github.cryptoofun.messages.events.TradeOrderProcessedEvent;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaHandlers {

    @GrpcClient(value = "market-data-server")
    MarketDataStreamerServiceGrpc.MarketDataStreamerServiceBlockingStub marketDataGrpcStub;

    @GrpcClient(value = "cash-wallet-server")

    CashWalletServiceGrpc.CashWalletServiceBlockingStub cashWalletGrpcStub;

    @Autowired
    KafkaPublishers kafkaPublishers;

    @KafkaListener(topics = "new_trade_orders", groupId = "order-processors")
    private void handleCommand(ProcessTradeOrderCommand command) {
        double cashReserved = 0;
        ModifyCashBalanceResponse modifiedCashBalance = null;
        try {
            // In the proposed implementation, take only market orders into consideration:
            if (command.getOrderType() != ProcessTradeOrderCommand.OrderType.MARKET) {
                kafkaPublishers.sendBlocking(new TradeOrderCancelledEvent(command.getOrderID(), "Unsupported order type"));
                return;
            }

            var liveMarketPrices = marketDataGrpcStub.enquireMarketPrice(EnquireMarketPriceRequest.newBuilder()
                    .setTicker(command.getTicker())
                    .setTimestampMs(String.valueOf(System.currentTimeMillis()))
                    .build());

            var tickerPrice = (command.getIntent() == ProcessTradeOrderCommand.Intent.BUY)
                    ? liveMarketPrices.getBidPrice()
                    : liveMarketPrices.getAskPrice();

            cashReserved = command.getAmount() * tickerPrice;
            modifiedCashBalance = cashWalletGrpcStub.modifyCashBalance(ModifyCashBalanceRequest.newBuilder()
                    .setUserId(command.getUserID())
                    .setDelta(-1 * cashReserved)
                    .build());

            kafkaPublishers.sendBlocking(new TradeOrderProcessedEvent(command.getOrderID(), tickerPrice));
        } catch (Exception e) {
            // If the cash's already reserved, refund in case of an error:
            if (modifiedCashBalance != null) {
                cashWalletGrpcStub.modifyCashBalance(ModifyCashBalanceRequest.newBuilder()
                        .setUserId(command.getUserID())
                        .setDelta(cashReserved)
                        .build());
            }
            kafkaPublishers.sendBlocking(new TradeOrderCancelledEvent(command.getOrderID(), "Unknown reason"));
        }
    }
}
