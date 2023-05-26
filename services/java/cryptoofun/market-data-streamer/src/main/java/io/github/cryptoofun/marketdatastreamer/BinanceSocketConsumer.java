package io.github.cryptoofun.marketdatastreamer;

import com.binance.connector.client.impl.WebSocketStreamClientImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class BinanceSocketConsumer implements ApplicationListener<ApplicationReadyEvent> {

    private final WebSocketStreamClientImpl wsClient;
    private final RedisTemplate<String, Object> redisTemplate;
    private final ObjectMapper objectMapper;

    @Autowired
    public BinanceSocketConsumer(
            WebSocketStreamClientImpl wsClient,
            RedisTemplate<String, Object> redisTemplate,
            ObjectMapper objectMapper) {

        this.wsClient = wsClient;
        this.redisTemplate = redisTemplate;
        this.objectMapper = objectMapper;
    }

    @Override
    public void onApplicationEvent(@NotNull ApplicationReadyEvent readyEvent) {
        for (var v : AllowedPairs.data) {
            var pair = v.split("_");
            var symbol = String.join("", pair[0], pair[1]).toLowerCase();
            wsClient.symbolTicker(symbol, (event) -> {
                try {
                    var ticker = objectMapper.readValue(event, SymbolTickerStreamData.class);
                    var tickerStr = objectMapper.writeValueAsString(ticker);
                    redisTemplate.opsForHash().put(ticker.s, "data", tickerStr);
                } catch (Exception e) {
                    log.error(e.toString());
                }
            });
        }
    }
}
