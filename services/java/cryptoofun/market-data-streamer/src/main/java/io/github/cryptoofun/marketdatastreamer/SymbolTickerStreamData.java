package io.github.cryptoofun.marketdatastreamer;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

// Ref: https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-ticker-streams
@AllArgsConstructor
@NoArgsConstructor
public class SymbolTickerStreamData {
    // Event time
    public Long E;

    // Symbol
    public String s;

    // Price change percent
    public String P;

    // Last price
    public String c;

    // Best bid price
    public String b;

    // Best bid quantity
    public String B;

    // Best ask price
    public String a;

    // Best ask quantity
    public String A;

    // Total traded base asset volume
    public String v;

    public TickerData extractTickerData() {
        var tickerData = new TickerData();
        tickerData.setTime(E);
        tickerData.setSymbol(s);
        tickerData.setPriceChangePercent(P);
        tickerData.setLastPrice(c);
        tickerData.setBidPrice(b);
        tickerData.setBidQty(B);
        tickerData.setAskPrice(a);
        tickerData.setAskQty(A);
        tickerData.setVolume(v);
        return tickerData;
    }
}
