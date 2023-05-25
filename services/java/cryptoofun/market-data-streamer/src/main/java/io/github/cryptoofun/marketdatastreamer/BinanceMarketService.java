package io.github.cryptoofun.marketdatastreamer;

import com.binance.connector.client.impl.SpotClientImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

@Service
public class BinanceMarketService {

    private final SpotClientImpl client;

    private final ArrayList<String> AllowedPairsNoUnderscore;

    private final ArrayList<String> PopularPairsNoUnderscore;

    private final ObjectMapper objectMapper;

    @Autowired
    public BinanceMarketService(SpotClientImpl client, ObjectMapper objectMapper) {
        this.client = client;
        this.objectMapper = objectMapper;
        AllowedPairsNoUnderscore = new ArrayList<>(AllowedPairs.data.stream().map((v) -> {
            var pair = v.split("_");
            return String.join("", pair[0], pair[1]);
        }).toList());
        PopularPairsNoUnderscore = new ArrayList<>(AllowedPairs.populars.stream().map((v) -> {
            var pair = v.split("_");
            return String.join("", pair[0], pair[1]);
        }).toList());
    }

    public BookTicker QueryOrderBookTicker(String symbol) throws Exception {
        if (!AllowedPairs.data.contains(symbol)) {
            throw new Exception("Disallowed pair");
        }

        String[] symbolPair = symbol.split("[-_ ]+");
        if (symbolPair.length == 2) {
            symbol = String.join("", symbolPair);
        }
        var params = new LinkedHashMap<String, Object>();
        params.put("symbol", symbol);
        var bookTickerStr = client.createMarket().bookTicker(params);
        return objectMapper.readValue(bookTickerStr, BookTicker.class);
    }

    public List<TickerRecapData> QueryAvailableTickersRecap() throws JsonProcessingException {
        var params = new LinkedHashMap<String, Object>();
        params.put("symbols", AllowedPairsNoUnderscore);
        params.put("type", "FULL");
        var dataStr = client.createMarket().ticker24H(params);
        return objectMapper.readerForListOf(TickerRecapData.class).readValue(dataStr);
    }

    public List<TickerRecapData> QueryPopularTickersRecap() throws JsonProcessingException {
        var params = new LinkedHashMap<String, Object>();
        params.put("symbols", PopularPairsNoUnderscore);
        params.put("type", "FULL");
        var dataStr = client.createMarket().ticker24H(params);
        return objectMapper.readerForListOf(TickerRecapData.class).readValue(dataStr);
    }
}
