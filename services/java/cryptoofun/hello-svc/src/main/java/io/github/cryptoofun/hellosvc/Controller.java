package io.github.cryptoofun.hellosvc;

import io.github.cryptoofun.genproto.GreetingMsg;
import io.grpc.StatusRuntimeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    private HelloClientService clientService;

    @Autowired
    private KafkaPublisher kafkaPublisher;

    @RequestMapping("/")
    public String sayHello(@RequestParam String fname, @RequestParam String lname) {
        GreetingMsg response;
        try {
            response = clientService.hello(fname, lname);
        } catch (StatusRuntimeException e) {
            return "An error has occurred: " + e.getStatus().getCode().name();
        }
        kafkaPublisher.sendMessageForHello(response.getBody());
        return response.getBody();
    }

}
