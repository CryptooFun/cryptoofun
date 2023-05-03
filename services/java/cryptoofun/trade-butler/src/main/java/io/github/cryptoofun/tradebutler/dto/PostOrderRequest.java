package io.github.cryptoofun.tradebutler.dto;

import lombok.Data;

@Data
public class PostOrderRequest {
    private final String orderType;
    private final String intent;
    private final String ticker;
    private final double price;
    private final double amount;
}
