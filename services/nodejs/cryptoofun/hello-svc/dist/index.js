"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const common_pb_1 = require("genproto/common_pb");
const hello_grpc_pb_1 = require("genproto/hello_grpc_pb");
const hello_pb_1 = require("genproto/hello_pb");
const hello = (call, callback) => {
    const response = new hello_pb_1.HelloResponse();
    response.setMessage(new common_pb_1.GreetingMsg().setBody(`Hey, ${call.request.getFirstName() + " " + call.request.getLastName()}!`));
    callback(null, response);
};
const server = new grpc_js_1.Server();
server.addService(hello_grpc_pb_1.HelloServiceService, { hello });
server.bindAsync("0.0.0.0:4000", grpc_js_1.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log("server is running on 0.0.0.0:4000");
});
//# sourceMappingURL=index.js.map