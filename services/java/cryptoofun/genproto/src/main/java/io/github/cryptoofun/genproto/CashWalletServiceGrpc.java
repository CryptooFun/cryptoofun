package io.github.cryptoofun.genproto;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.54.1)",
    comments = "Source: cash_wallet.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class CashWalletServiceGrpc {

  private CashWalletServiceGrpc() {}

  public static final String SERVICE_NAME = "CashWalletService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.AskCashBalanceRequest,
      io.github.cryptoofun.genproto.AskCashBalanceResponse> getAskCashBalanceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AskCashBalance",
      requestType = io.github.cryptoofun.genproto.AskCashBalanceRequest.class,
      responseType = io.github.cryptoofun.genproto.AskCashBalanceResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.AskCashBalanceRequest,
      io.github.cryptoofun.genproto.AskCashBalanceResponse> getAskCashBalanceMethod() {
    io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.AskCashBalanceRequest, io.github.cryptoofun.genproto.AskCashBalanceResponse> getAskCashBalanceMethod;
    if ((getAskCashBalanceMethod = CashWalletServiceGrpc.getAskCashBalanceMethod) == null) {
      synchronized (CashWalletServiceGrpc.class) {
        if ((getAskCashBalanceMethod = CashWalletServiceGrpc.getAskCashBalanceMethod) == null) {
          CashWalletServiceGrpc.getAskCashBalanceMethod = getAskCashBalanceMethod =
              io.grpc.MethodDescriptor.<io.github.cryptoofun.genproto.AskCashBalanceRequest, io.github.cryptoofun.genproto.AskCashBalanceResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AskCashBalance"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.github.cryptoofun.genproto.AskCashBalanceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.github.cryptoofun.genproto.AskCashBalanceResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CashWalletServiceMethodDescriptorSupplier("AskCashBalance"))
              .build();
        }
      }
    }
    return getAskCashBalanceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.ModifyCashBalanceRequest,
      io.github.cryptoofun.genproto.ModifyCashBalanceResponse> getModifyCashBalanceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ModifyCashBalance",
      requestType = io.github.cryptoofun.genproto.ModifyCashBalanceRequest.class,
      responseType = io.github.cryptoofun.genproto.ModifyCashBalanceResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.ModifyCashBalanceRequest,
      io.github.cryptoofun.genproto.ModifyCashBalanceResponse> getModifyCashBalanceMethod() {
    io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.ModifyCashBalanceRequest, io.github.cryptoofun.genproto.ModifyCashBalanceResponse> getModifyCashBalanceMethod;
    if ((getModifyCashBalanceMethod = CashWalletServiceGrpc.getModifyCashBalanceMethod) == null) {
      synchronized (CashWalletServiceGrpc.class) {
        if ((getModifyCashBalanceMethod = CashWalletServiceGrpc.getModifyCashBalanceMethod) == null) {
          CashWalletServiceGrpc.getModifyCashBalanceMethod = getModifyCashBalanceMethod =
              io.grpc.MethodDescriptor.<io.github.cryptoofun.genproto.ModifyCashBalanceRequest, io.github.cryptoofun.genproto.ModifyCashBalanceResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ModifyCashBalance"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.github.cryptoofun.genproto.ModifyCashBalanceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.github.cryptoofun.genproto.ModifyCashBalanceResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CashWalletServiceMethodDescriptorSupplier("ModifyCashBalance"))
              .build();
        }
      }
    }
    return getModifyCashBalanceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest,
      io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse> getAskTopBalancesDescendingMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AskTopBalancesDescending",
      requestType = io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest.class,
      responseType = io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest,
      io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse> getAskTopBalancesDescendingMethod() {
    io.grpc.MethodDescriptor<io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest, io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse> getAskTopBalancesDescendingMethod;
    if ((getAskTopBalancesDescendingMethod = CashWalletServiceGrpc.getAskTopBalancesDescendingMethod) == null) {
      synchronized (CashWalletServiceGrpc.class) {
        if ((getAskTopBalancesDescendingMethod = CashWalletServiceGrpc.getAskTopBalancesDescendingMethod) == null) {
          CashWalletServiceGrpc.getAskTopBalancesDescendingMethod = getAskTopBalancesDescendingMethod =
              io.grpc.MethodDescriptor.<io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest, io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AskTopBalancesDescending"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CashWalletServiceMethodDescriptorSupplier("AskTopBalancesDescending"))
              .build();
        }
      }
    }
    return getAskTopBalancesDescendingMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static CashWalletServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CashWalletServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CashWalletServiceStub>() {
        @java.lang.Override
        public CashWalletServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CashWalletServiceStub(channel, callOptions);
        }
      };
    return CashWalletServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static CashWalletServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CashWalletServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CashWalletServiceBlockingStub>() {
        @java.lang.Override
        public CashWalletServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CashWalletServiceBlockingStub(channel, callOptions);
        }
      };
    return CashWalletServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static CashWalletServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CashWalletServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CashWalletServiceFutureStub>() {
        @java.lang.Override
        public CashWalletServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CashWalletServiceFutureStub(channel, callOptions);
        }
      };
    return CashWalletServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public interface AsyncService {

    /**
     */
    default void askCashBalance(io.github.cryptoofun.genproto.AskCashBalanceRequest request,
        io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.AskCashBalanceResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAskCashBalanceMethod(), responseObserver);
    }

    /**
     */
    default void modifyCashBalance(io.github.cryptoofun.genproto.ModifyCashBalanceRequest request,
        io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.ModifyCashBalanceResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getModifyCashBalanceMethod(), responseObserver);
    }

    /**
     */
    default void askTopBalancesDescending(io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest request,
        io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAskTopBalancesDescendingMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service CashWalletService.
   */
  public static abstract class CashWalletServiceImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return CashWalletServiceGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service CashWalletService.
   */
  public static final class CashWalletServiceStub
      extends io.grpc.stub.AbstractAsyncStub<CashWalletServiceStub> {
    private CashWalletServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CashWalletServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CashWalletServiceStub(channel, callOptions);
    }

    /**
     */
    public void askCashBalance(io.github.cryptoofun.genproto.AskCashBalanceRequest request,
        io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.AskCashBalanceResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAskCashBalanceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void modifyCashBalance(io.github.cryptoofun.genproto.ModifyCashBalanceRequest request,
        io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.ModifyCashBalanceResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getModifyCashBalanceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void askTopBalancesDescending(io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest request,
        io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAskTopBalancesDescendingMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service CashWalletService.
   */
  public static final class CashWalletServiceBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<CashWalletServiceBlockingStub> {
    private CashWalletServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CashWalletServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CashWalletServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public io.github.cryptoofun.genproto.AskCashBalanceResponse askCashBalance(io.github.cryptoofun.genproto.AskCashBalanceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAskCashBalanceMethod(), getCallOptions(), request);
    }

    /**
     */
    public io.github.cryptoofun.genproto.ModifyCashBalanceResponse modifyCashBalance(io.github.cryptoofun.genproto.ModifyCashBalanceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getModifyCashBalanceMethod(), getCallOptions(), request);
    }

    /**
     */
    public io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse askTopBalancesDescending(io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAskTopBalancesDescendingMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service CashWalletService.
   */
  public static final class CashWalletServiceFutureStub
      extends io.grpc.stub.AbstractFutureStub<CashWalletServiceFutureStub> {
    private CashWalletServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CashWalletServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CashWalletServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.github.cryptoofun.genproto.AskCashBalanceResponse> askCashBalance(
        io.github.cryptoofun.genproto.AskCashBalanceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAskCashBalanceMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.github.cryptoofun.genproto.ModifyCashBalanceResponse> modifyCashBalance(
        io.github.cryptoofun.genproto.ModifyCashBalanceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getModifyCashBalanceMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse> askTopBalancesDescending(
        io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAskTopBalancesDescendingMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ASK_CASH_BALANCE = 0;
  private static final int METHODID_MODIFY_CASH_BALANCE = 1;
  private static final int METHODID_ASK_TOP_BALANCES_DESCENDING = 2;

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
        case METHODID_ASK_CASH_BALANCE:
          serviceImpl.askCashBalance((io.github.cryptoofun.genproto.AskCashBalanceRequest) request,
              (io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.AskCashBalanceResponse>) responseObserver);
          break;
        case METHODID_MODIFY_CASH_BALANCE:
          serviceImpl.modifyCashBalance((io.github.cryptoofun.genproto.ModifyCashBalanceRequest) request,
              (io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.ModifyCashBalanceResponse>) responseObserver);
          break;
        case METHODID_ASK_TOP_BALANCES_DESCENDING:
          serviceImpl.askTopBalancesDescending((io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest) request,
              (io.grpc.stub.StreamObserver<io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse>) responseObserver);
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
          getAskCashBalanceMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              io.github.cryptoofun.genproto.AskCashBalanceRequest,
              io.github.cryptoofun.genproto.AskCashBalanceResponse>(
                service, METHODID_ASK_CASH_BALANCE)))
        .addMethod(
          getModifyCashBalanceMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              io.github.cryptoofun.genproto.ModifyCashBalanceRequest,
              io.github.cryptoofun.genproto.ModifyCashBalanceResponse>(
                service, METHODID_MODIFY_CASH_BALANCE)))
        .addMethod(
          getAskTopBalancesDescendingMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              io.github.cryptoofun.genproto.AskTopBalancesDescendingRequest,
              io.github.cryptoofun.genproto.AskTopBalancesDescendingResponse>(
                service, METHODID_ASK_TOP_BALANCES_DESCENDING)))
        .build();
  }

  private static abstract class CashWalletServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    CashWalletServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return io.github.cryptoofun.genproto.CashWallet.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("CashWalletService");
    }
  }

  private static final class CashWalletServiceFileDescriptorSupplier
      extends CashWalletServiceBaseDescriptorSupplier {
    CashWalletServiceFileDescriptorSupplier() {}
  }

  private static final class CashWalletServiceMethodDescriptorSupplier
      extends CashWalletServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    CashWalletServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (CashWalletServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new CashWalletServiceFileDescriptorSupplier())
              .addMethod(getAskCashBalanceMethod())
              .addMethod(getModifyCashBalanceMethod())
              .addMethod(getAskTopBalancesDescendingMethod())
              .build();
        }
      }
    }
    return result;
  }
}
