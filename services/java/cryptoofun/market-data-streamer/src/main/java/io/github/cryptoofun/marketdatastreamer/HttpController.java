package io.github.cryptoofun.marketdatastreamer;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HttpController {

    @Autowired
    private BinanceMarketService binanceMarketService;

    @GetMapping("/market/symbols/allowed")
    public ResponseEntity<ArrayList<String>> getAllowedSymbols() {
        return new ResponseEntity<>(AllowedPairs.data, HttpStatus.OK);
    }

    @GetMapping("/market/data/recap")
    public ResponseEntity<List<TickerRecapData>> getMarketRecap() throws JsonProcessingException {
        var body = binanceMarketService.QueryAvailableTickersRecap();
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @GetMapping("/market/data/popular")
    public ResponseEntity<List<TickerRecapData>> getMarketPopular() throws JsonProcessingException {
        var body = binanceMarketService.QueryPopularTickersRecap();
        return new ResponseEntity<>(body, HttpStatus.OK);
    }
}
