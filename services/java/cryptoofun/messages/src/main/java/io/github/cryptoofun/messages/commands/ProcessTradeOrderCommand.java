package io.github.cryptoofun.messages.commands;

import lombok.Data;

@Data
public class ProcessTradeOrderCommand {
    public enum OrderType {LIMIT}
    public enum Intent {BUY, SELL}

    private final String orderID;
    private final String userID;
    private final OrderType orderType;
    private final Intent intent;
    private final String ticker;
    private final double price;
    private final double amount;
}
