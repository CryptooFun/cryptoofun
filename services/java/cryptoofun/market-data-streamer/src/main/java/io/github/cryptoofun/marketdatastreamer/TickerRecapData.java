package io.github.cryptoofun.marketdatastreamer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TickerRecapData {
    private String symbol;
    private String lastPrice;
    private String priceChangePercent;
    private String volume;
}
