package io.github.cryptoofun.marketdatastreamer;

import com.binance.connector.client.impl.SpotClientImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

@Service
public class BinanceMarketService {

    RedisTemplate<String, Object> redisTemplate;

    private final ObjectMapper objectMapper;

    @Autowired
    public BinanceMarketService(RedisTemplate<String, Object> redisTemplate, ObjectMapper objectMapper) {
        this.redisTemplate = redisTemplate;
        this.objectMapper = objectMapper;
    }

    private String removeUnderscoreFromSymbol(String symbol) {
        String[] symbolPair = symbol.split("[-_ ]+");
        return String.join("", symbolPair);
    }

    public TickerData QueryOrderBookTicker(String symbol) throws Exception {
        if (!AllowedPairs.data.contains(symbol)) {
            throw new Exception("Disallowed pair");
        }

        symbol = removeUnderscoreFromSymbol(symbol);
        String dataStr = (String) redisTemplate.opsForHash().get(symbol, "data");
        return objectMapper.readValue(dataStr, TickerData.class);
    }

    public List<TickerData> QueryAvailableTickersRecap() throws JsonProcessingException {
        var dataStr = new StringBuilder();
        dataStr.append("[");
        for (var symbol: AllowedPairs.data) {
            symbol = removeUnderscoreFromSymbol(symbol);
            dataStr.append((String) redisTemplate.opsForHash().get(symbol, "data"));
            dataStr.append(",");
        }
        dataStr.delete(dataStr.length() - 1, dataStr.length());
        dataStr.append("]");
        return objectMapper.readerForListOf(TickerData.class).readValue(dataStr.toString());
    }

    public List<TickerData> QueryPopularTickersRecap() throws JsonProcessingException {
        var dataStr = new StringBuilder();
        dataStr.append("[");
        for (var symbol: AllowedPairs.populars) {
            symbol = removeUnderscoreFromSymbol(symbol);
            dataStr.append((String) redisTemplate.opsForHash().get(symbol, "data"));
            dataStr.append(",");
        }
        dataStr.delete(dataStr.length() - 1, dataStr.length());
        dataStr.append("]");
        return objectMapper.readerForListOf(TickerData.class).readValue(dataStr.toString());
    }
}
