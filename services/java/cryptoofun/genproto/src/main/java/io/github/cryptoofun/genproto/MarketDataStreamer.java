// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: market_data_streamer.proto

package io.github.cryptoofun.genproto;

public final class MarketDataStreamer {
  private MarketDataStreamer() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_EnquireMarketPriceRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_EnquireMarketPriceRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_EnquireMarketPriceResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_EnquireMarketPriceResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\032market_data_streamer.proto\"V\n\031EnquireM" +
      "arketPriceRequest\022!\n\014timestamp_ms\030\001 \001(\tR" +
      "\013timestampMs\022\026\n\006ticker\030\002 \001(\tR\006ticker\"\221\001\n" +
      "\032EnquireMarketPriceResponse\022!\n\014timestamp" +
      "_ms\030\001 \001(\tR\013timestampMs\022\026\n\006ticker\030\002 \001(\tR\006" +
      "ticker\022\033\n\tbid_price\030\003 \001(\001R\010bidPrice\022\033\n\ta" +
      "sk_price\030\004 \001(\001R\010askPrice2l\n\031MarketDataSt" +
      "reamerService\022O\n\022EnquireMarketPrice\022\032.En" +
      "quireMarketPriceRequest\032\033.EnquireMarketP" +
      "riceResponse\"\000B!\n\035io.github.cryptoofun.g" +
      "enprotoP\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_EnquireMarketPriceRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_EnquireMarketPriceRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_EnquireMarketPriceRequest_descriptor,
        new java.lang.String[] { "TimestampMs", "Ticker", });
    internal_static_EnquireMarketPriceResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_EnquireMarketPriceResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_EnquireMarketPriceResponse_descriptor,
        new java.lang.String[] { "TimestampMs", "Ticker", "BidPrice", "AskPrice", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
