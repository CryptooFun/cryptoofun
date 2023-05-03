package io.github.cryptoofun.marketdatastreamer;

import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

@GrpcService
public class GrpcServiceImpl extends MarketDataStreamerServiceGrpc.MarketDataStreamerServiceImplBase {

    @Autowired
    private BinanceMarketService binanceMarketService;

    @Override
    public void enquireMarketPrice(EnquireMarketPriceRequest request, StreamObserver<EnquireMarketPriceResponse> responseObserver) {
        try {
            var bookTicker = binanceMarketService.QueryOrderBookTicker(request.getTicker());
            var response = EnquireMarketPriceResponse.newBuilder()
                    .setTicker(bookTicker.getSymbol())
                    .setBidPrice(Double.parseDouble(bookTicker.getBidPrice()))
                    .setAskPrice(Double.parseDouble(bookTicker.getAskPrice()))
                    .setTimestampMs(String.valueOf(System.currentTimeMillis()))
                    .build();
            responseObserver.onNext(response);
        } catch (Exception e) {
            responseObserver.onError(e);
        }
        responseObserver.onCompleted();
    }
}
