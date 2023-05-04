package io.github.cryptoofun.genproto;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.54.1)",
    comments = "Source: market_data_streamer.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class MarketDataStreamerServiceGrpc {

  private MarketDataStreamerServiceGrpc() {}

  public static final String SERVICE_NAME = "MarketDataStreamerService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.EnquireMarketPriceRequest,
      io.github.cryptoofun.genproto.EnquireMarketPriceResponse> getEnquireMarketPriceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "EnquireMarketPrice",
      requestType = io.github.cryptoofun.genproto.EnquireMarketPriceRequest.class,
      responseType = io.github.cryptoofun.genproto.EnquireMarketPriceResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.EnquireMarketPriceRequest,
      io.github.cryptoofun.genproto.EnquireMarketPriceResponse> getEnquireMarketPriceMethod() {
    io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.EnquireMarketPriceRequest, io.github.cryptoofun.genproto.EnquireMarketPriceResponse> getEnquireMarketPriceMethod;
    if ((getEnquireMarketPriceMethod = MarketDataStreamerServiceGrpc.getEnquireMarketPriceMethod) == null) {
      synchronized (MarketDataStreamerServiceGrpc.class) {
        if ((getEnquireMarketPriceMethod = MarketDataStreamerServiceGrpc.getEnquireMarketPriceMethod) == null) {
          MarketDataStreamerServiceGrpc.getEnquireMarketPriceMethod = getEnquireMarketPriceMethod =
              io.grpc.MethodDescriptor.<io.github.cryptoofun.genproto.EnquireMarketPriceRequest, io.github.cryptoofun.genproto.EnquireMarketPriceResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "EnquireMarketPrice"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.github.cryptoofun.genproto.EnquireMarketPriceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.github.cryptoofun.genproto.EnquireMarketPriceResponse.getDefaultInstance()))
              .setSchemaDescriptor(new MarketDataStreamerServiceMethodDescriptorSupplier("EnquireMarketPrice"))
              .build();
        }
      }
    }
    return getEnquireMarketPriceMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static MarketDataStreamerServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MarketDataStreamerServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MarketDataStreamerServiceStub>() {
        @java.lang.Override
        public MarketDataStreamerServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MarketDataStreamerServiceStub(channel, callOptions);
        }
      };
    return MarketDataStreamerServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static MarketDataStreamerServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MarketDataStreamerServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MarketDataStreamerServiceBlockingStub>() {
        @java.lang.Override
        public MarketDataStreamerServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MarketDataStreamerServiceBlockingStub(channel, callOptions);
        }
      };
    return MarketDataStreamerServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static MarketDataStreamerServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<MarketDataStreamerServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<MarketDataStreamerServiceFutureStub>() {
        @java.lang.Override
        public MarketDataStreamerServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new MarketDataStreamerServiceFutureStub(channel, callOptions);
        }
      };
    return MarketDataStreamerServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void enquireMarketPrice(io.github.cryptoofun.genproto.EnquireMarketPriceRequest request,
        io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.EnquireMarketPriceResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getEnquireMarketPriceMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service MarketDataStreamerService.
   */
  public static abstract class MarketDataStreamerServiceImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return MarketDataStreamerServiceGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service MarketDataStreamerService.
   */
  public static final class MarketDataStreamerServiceStub
      extends io.grpc.stub.AbstractAsyncStub<MarketDataStreamerServiceStub> {
    private MarketDataStreamerServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MarketDataStreamerServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MarketDataStreamerServiceStub(channel, callOptions);
    }

    /**
     */
    public void enquireMarketPrice(io.github.cryptoofun.genproto.EnquireMarketPriceRequest request,
        io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.EnquireMarketPriceResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getEnquireMarketPriceMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service MarketDataStreamerService.
   */
  public static final class MarketDataStreamerServiceBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<MarketDataStreamerServiceBlockingStub> {
    private MarketDataStreamerServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MarketDataStreamerServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MarketDataStreamerServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public io.github.cryptoofun.genproto.EnquireMarketPriceResponse enquireMarketPrice(io.github.cryptoofun.genproto.EnquireMarketPriceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getEnquireMarketPriceMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service MarketDataStreamerService.
   */
  public static final class MarketDataStreamerServiceFutureStub
      extends io.grpc.stub.AbstractFutureStub<MarketDataStreamerServiceFutureStub> {
    private MarketDataStreamerServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MarketDataStreamerServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new MarketDataStreamerServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.github.cryptoofun.genproto.EnquireMarketPriceResponse> enquireMarketPrice(
        io.github.cryptoofun.genproto.EnquireMarketPriceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getEnquireMarketPriceMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ENQUIRE_MARKET_PRICE = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AsyncService serviceImpl;
    private final int methodId;

    MethodHandlers(AsyncService serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ENQUIRE_MARKET_PRICE:
          serviceImpl.enquireMarketPrice((io.github.cryptoofun.genproto.EnquireMarketPriceRequest) request,
              (io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.EnquireMarketPriceResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  public static final io.grpc.ServerServiceDefinition bindService(AsyncService service) {
    return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
        .addMethod(
          getEnquireMarketPriceMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              io.github.cryptoofun.genproto.EnquireMarketPriceRequest,
              io.github.cryptoofun.genproto.EnquireMarketPriceResponse>(
                service, METHODID_ENQUIRE_MARKET_PRICE)))
        .build();
  }

  private static abstract class MarketDataStreamerServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    MarketDataStreamerServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return io.github.cryptoofun.genproto.MarketDataStreamer.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("MarketDataStreamerService");
    }
  }

  private static final class MarketDataStreamerServiceFileDescriptorSupplier
      extends MarketDataStreamerServiceBaseDescriptorSupplier {
    MarketDataStreamerServiceFileDescriptorSupplier() {}
  }

  private static final class MarketDataStreamerServiceMethodDescriptorSupplier
      extends MarketDataStreamerServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    MarketDataStreamerServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (MarketDataStreamerServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new MarketDataStreamerServiceFileDescriptorSupplier())
              .addMethod(getEnquireMarketPriceMethod())
              .build();
        }
      }
    }
    return result;
  }
}
