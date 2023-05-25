package io.github.cryptoofun.marketdatastreamer;

import com.binance.connector.client.impl.SpotClientImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

@Service
@Slf4j
public class MarketDataScheduler {

    private final ArrayList<String> AllowedPairsNoUnderscore;

    private final SpotClientImpl client;

    private final ObjectMapper objectMapper;

    private final RedisTemplate<String, Object> redisTemplate;

    @Autowired
    public MarketDataScheduler(
            SpotClientImpl client,
            ObjectMapper objectMapper,
            RedisTemplate<String, Object> redisTemplate) {

        this.client = client;
        this.objectMapper = objectMapper;
        this.redisTemplate = redisTemplate;

        AllowedPairsNoUnderscore = new ArrayList<>(AllowedPairs.data.stream().map((v) -> {
            var pair = v.split("_");
            return String.join("", pair[0], pair[1]);
        }).toList());
    }

    @Scheduled(fixedRate = 1250L)
    private void queryLatestMarketData() throws JsonProcessingException {
        var params = new LinkedHashMap<String, Object>();
        params.put("symbols", AllowedPairsNoUnderscore);
        params.put("type", "FULL");
        var dataStr = client.createMarket().ticker24H(params);
        List<TickerData> data = objectMapper.readerForListOf(TickerData.class).readValue(dataStr);

        for (var ticker: data) {
            var tickerStr = objectMapper.writeValueAsString(ticker);
            redisTemplate.opsForHash().put(ticker.getSymbol(), "data", tickerStr);
        }
    }
}
