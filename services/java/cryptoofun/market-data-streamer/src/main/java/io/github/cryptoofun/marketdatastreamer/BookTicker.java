package io.github.cryptoofun.marketdatastreamer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookTicker {
    private String symbol;
    private String bidPrice;
    private String askPrice;
    private String bidQty;
    private String askQty;
}