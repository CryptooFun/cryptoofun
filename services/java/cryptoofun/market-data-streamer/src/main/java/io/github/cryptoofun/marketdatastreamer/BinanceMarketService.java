package io.github.cryptoofun.marketdatastreamer;

import com.binance.connector.client.impl.SpotClientImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;

@Service
public class BinanceMarketService {

    @Autowired
    private SpotClientImpl client;

    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class BookTicker {
        private String symbol;
        private String bidPrice;
        private String askPrice;
        private String bidQty;
        private String askQty;
    }

    public BookTicker QueryOrderBookTicker(String symbol) throws JsonProcessingException {
        var params = new LinkedHashMap<String, Object>();
        params.put("symbol", symbol);
        var bookTickerStr = client.createMarket().bookTicker(params);
        return new ObjectMapper().readValue(bookTickerStr, BookTicker.class);
    }
}
