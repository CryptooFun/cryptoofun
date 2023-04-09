import { credentials } from '@grpc/grpc-js';
import { HelloServiceClient } from '../genproto/hello_grpc_pb';

const helloClient = new HelloServiceClient(
  'localhost:9090',
  credentials.createInsecure()
);

export { helloClient };
