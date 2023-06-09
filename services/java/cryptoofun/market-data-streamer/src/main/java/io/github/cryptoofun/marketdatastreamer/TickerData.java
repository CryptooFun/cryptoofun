package io.github.cryptoofun.marketdatastreamer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TickerData {
    private Long time;
    private String symbol;
    private String lastPrice;
    private String priceChangePercent;
    private String volume;
    private String bidPrice;
    private String askPrice;
    private String bidQty;
    private String askQty;
}
