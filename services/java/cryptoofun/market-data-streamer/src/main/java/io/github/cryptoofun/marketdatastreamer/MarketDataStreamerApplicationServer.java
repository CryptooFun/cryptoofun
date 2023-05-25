package io.github.cryptoofun.marketdatastreamer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class MarketDataStreamerApplicationServer {

    public static void main(String[] args) {
        SpringApplication.run(MarketDataStreamerApplicationServer.class, args);
    }
}
