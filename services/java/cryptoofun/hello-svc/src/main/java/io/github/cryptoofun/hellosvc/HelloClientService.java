package io.github.cryptoofun.hellosvc;

import io.github.cryptoofun.genproto.GreetingMsg;
import io.github.cryptoofun.genproto.HelloRequest;
import io.github.cryptoofun.genproto.HelloResponse;
import io.github.cryptoofun.genproto.HelloServiceGrpc;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelloClientService {

    @GrpcClient(value = "hello-server")
    private HelloServiceGrpc.HelloServiceBlockingStub helloStub;

    public GreetingMsg hello(final String fname, final String lname) {
        final HelloResponse reply = this.helloStub.hello(HelloRequest.newBuilder()
                .setFirstName(fname)
                .setLastName(lname)
                .build());

        return reply.getMessage();
    }

}
