package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.tradebutler.dto.GetOrdersResponse;
import io.github.cryptoofun.tradebutler.dto.PostOrderRequest;
import io.github.cryptoofun.tradebutler.dto.PostOrderResponse;
import io.github.cryptoofun.tradebutler.exception.CommandServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ApiController {

    @Autowired
    private TradeButlerService tradeButlerCommandService;

    @PostMapping("/")
    public ResponseEntity<PostOrderResponse> postOrder(@RequestAttribute(value = JwtMiddlewareNoVerify.UserIdAttrKey) String userID,
                                                       @RequestBody PostOrderRequest request) throws CommandServiceException {

        // TODO: May utilize object mapping for less hustle.
        var orderID = tradeButlerCommandService.NewOrder(TradeButlerService.NewOrderRequest.builder()
                .userID(userID)
                .orderType(request.getOrderType())
                .intent(request.getIntent())
                .ticker(request.getTicker())
                .price(request.getPrice())
                .amount(request.getAmount())
                .build());
        var response = new PostOrderResponse(orderID);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<GetOrdersResponse> getOrders(@RequestAttribute(value = JwtMiddlewareNoVerify.UserIdAttrKey) String userID) throws CommandServiceException {

        var orders = tradeButlerCommandService.RetrieveOrdersByUser(userID);
        var response = new GetOrdersResponse(orders);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
