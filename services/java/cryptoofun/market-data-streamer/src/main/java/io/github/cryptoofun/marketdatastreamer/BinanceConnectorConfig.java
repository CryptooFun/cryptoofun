package io.github.cryptoofun.marketdatastreamer;

import com.binance.connector.client.impl.SpotClientImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BinanceConnectorConfig {

    @Bean
    SpotClientImpl binanceClient() {
        return new SpotClientImpl();
    }
}
