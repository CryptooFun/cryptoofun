import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";

import { GreetingMsg } from "genproto/common_pb";
import { HelloServiceService } from "genproto/hello_grpc_pb";
import { HelloRequest, HelloResponse } from "genproto/hello_pb";

const hello = (
  call: ServerUnaryCall<HelloRequest, HelloResponse>,
  callback: sendUnaryData<HelloResponse>
) => {
  const response = new HelloResponse();
  response.setMessage(
    new GreetingMsg().setBody(
      `Hey, ${call.request.getFirstName() + " " + call.request.getLastName()}!`
    )
  );
  callback(null, response);
};

const server = new Server();

server.addService(HelloServiceService, { hello });

server.bindAsync("0.0.0.0:4000", ServerCredentials.createInsecure(), () => {
  server.start();
  console.log("server is running on 0.0.0.0:4000");
});
