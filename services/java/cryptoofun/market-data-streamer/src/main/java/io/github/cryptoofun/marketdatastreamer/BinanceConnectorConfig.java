package io.github.cryptoofun.marketdatastreamer;

import com.binance.connector.client.impl.SpotClientImpl;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BinanceConnectorConfig {

    @Value("${binance.api-key}")
    private String apiKey;

    @Value("${binance.secret-key}")
    private String secretKey;

    @Bean
    SpotClientImpl binanceClient() {
        if (apiKey.isBlank() || secretKey.isBlank()) {
            System.out.println("Using Binance spot client in unauthorized mode!!");
            return new SpotClientImpl();
        }
        return new SpotClientImpl(apiKey, secretKey);
    }
}
