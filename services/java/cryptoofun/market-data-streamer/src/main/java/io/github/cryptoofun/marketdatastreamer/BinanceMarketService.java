package io.github.cryptoofun.marketdatastreamer;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class BinanceMarketService {

    private final RedisTemplate<String, Object> redisTemplate;
    private final ObjectMapper objectMapper;
    private final ArrayList<String> AllowedPairsNoUnderscore;
    private final ArrayList<String> PopularPairsNoUnderscore;

    @Autowired
    public BinanceMarketService(RedisTemplate<String, Object> redisTemplate, ObjectMapper objectMapper) {
        this.redisTemplate = redisTemplate;
        this.objectMapper = objectMapper;
        AllowedPairsNoUnderscore = new ArrayList<>(AllowedPairs
                .data
                .stream()
                .map(this::removeUnderscoreFromSymbol).toList());
        PopularPairsNoUnderscore = new ArrayList<>(AllowedPairs
                .populars
                .stream()
                .map(this::removeUnderscoreFromSymbol).toList());
    }

    private String removeUnderscoreFromSymbol(String symbol) {
        String[] symbolPair = symbol.split("[-_ ]+");
        return String.join("", symbolPair);
    }

    private ArrayList<TickerData> queryTickerDataRecap(ArrayList<String> sourceList) throws JsonProcessingException {
        var tickerDataList = new ArrayList<TickerData>(sourceList.size());
        for (var symbol : sourceList) {
            var dataStr = (String) redisTemplate.opsForHash().get(symbol, "data");
            var tickerData = objectMapper.readValue(dataStr, SymbolTickerStreamData.class)
                    .extractTickerData();
            tickerDataList.add(tickerData);
        }
        return tickerDataList;
    }

    public TickerData QueryOrderBookTicker(String symbol) throws Exception {
        if (!AllowedPairs.data.contains(symbol)) {
            throw new Exception("Disallowed pair");
        }

        symbol = removeUnderscoreFromSymbol(symbol);
        String dataStr = (String) redisTemplate.opsForHash().get(symbol, "data");
        var ticker = objectMapper.readValue(dataStr, SymbolTickerStreamData.class);
        return ticker.extractTickerData();
    }

    public ArrayList<TickerData> QueryAvailableTickersRecap() throws JsonProcessingException {
        return queryTickerDataRecap(AllowedPairsNoUnderscore);
    }

    public ArrayList<TickerData> QueryPopularTickersRecap() throws JsonProcessingException {
        return queryTickerDataRecap(PopularPairsNoUnderscore);
    }
}
