package io.github.cryptoofun.hellosvc;


import io.github.cryptoofun.genproto.GreetingMsg;
import io.github.cryptoofun.genproto.HelloRequest;
import io.github.cryptoofun.genproto.HelloResponse;
import io.github.cryptoofun.genproto.HelloServiceGrpc;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;

@GrpcService
public class HelloServiceServer extends HelloServiceGrpc.HelloServiceImplBase {

    @Override
    public void hello(HelloRequest request, StreamObserver<HelloResponse> responseObserver) {
        var message = GreetingMsg.newBuilder().setBody(String.format("Hey, %s %s!",
                request.getFirstName(),
                request.getLastName())).build();
        var reply = HelloResponse.newBuilder()
                .setMessage(message)
                .build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }

}
