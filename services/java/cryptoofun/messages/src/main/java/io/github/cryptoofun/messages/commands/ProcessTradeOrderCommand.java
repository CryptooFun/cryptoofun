package io.github.cryptoofun.messages.commands;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ProcessTradeOrderCommand {
    public enum OrderType {MARKET}
    public enum Intent {BUY, SELL}

    private String orderID;
    private String userID;
    private OrderType orderType;
    private Intent intent;
    private String ticker;
    private double price;
    private double amount;
}
