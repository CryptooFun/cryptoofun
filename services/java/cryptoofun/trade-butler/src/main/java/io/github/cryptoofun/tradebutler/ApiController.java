package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.tradebutler.dto.PostOrderRequest;
import io.github.cryptoofun.tradebutler.dto.PostOrderResponse;
import io.github.cryptoofun.tradebutler.exception.CommandServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @Autowired
    private TradeButlerService tradeButlerCommandService;

    @PostMapping("/")
    public ResponseEntity<PostOrderResponse> postOrder(@RequestBody PostOrderRequest orderRequest) throws CommandServiceException {
        var orderID = tradeButlerCommandService.NewOrder(orderRequest);
        var orderResponse = new PostOrderResponse(orderID);
        return new ResponseEntity<>(orderResponse, HttpStatus.OK);
    }
}
