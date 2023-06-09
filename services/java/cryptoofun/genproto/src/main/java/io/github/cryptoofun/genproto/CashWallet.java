// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: cash_wallet.proto

package io.github.cryptoofun.genproto;

public final class CashWallet {
  private CashWallet() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_AskCashBalanceRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_AskCashBalanceRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_AskCashBalanceResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_AskCashBalanceResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ModifyCashBalanceRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ModifyCashBalanceRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ModifyCashBalanceResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ModifyCashBalanceResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_AskTopBalancesDescendingRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_AskTopBalancesDescendingRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_AskTopBalancesDescendingResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_AskTopBalancesDescendingResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_BalanceItem_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_BalanceItem_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\021cash_wallet.proto\"0\n\025AskCashBalanceReq" +
      "uest\022\027\n\007user_id\030\001 \001(\tR\006userId\"K\n\026AskCash" +
      "BalanceResponse\022\027\n\007user_id\030\001 \001(\tR\006userId" +
      "\022\030\n\007balance\030\002 \001(\001R\007balance\"I\n\030ModifyCash" +
      "BalanceRequest\022\027\n\007user_id\030\001 \001(\tR\006userId\022" +
      "\024\n\005delta\030\002 \001(\001R\005delta\"Y\n\031ModifyCashBalan" +
      "ceResponse\022\027\n\007user_id\030\001 \001(\tR\006userId\022#\n\rb" +
      "alance_after\030\002 \001(\001R\014balanceAfter\"I\n\037AskT" +
      "opBalancesDescendingRequest\022\022\n\004skip\030\001 \001(" +
      "\rR\004skip\022\022\n\004take\030\002 \001(\rR\004take\"L\n AskTopBal" +
      "ancesDescendingResponse\022(\n\010balances\030\001 \003(" +
      "\0132\014.BalanceItemR\010balances\"@\n\013BalanceItem" +
      "\022\027\n\007user_id\030\001 \001(\tR\006userId\022\030\n\007balance\030\002 \001" +
      "(\001R\007balance2\211\002\n\021CashWalletService\022C\n\016Ask" +
      "CashBalance\022\026.AskCashBalanceRequest\032\027.As" +
      "kCashBalanceResponse\"\000\022L\n\021ModifyCashBala" +
      "nce\022\031.ModifyCashBalanceRequest\032\032.ModifyC" +
      "ashBalanceResponse\"\000\022a\n\030AskTopBalancesDe" +
      "scending\022 .AskTopBalancesDescendingReque" +
      "st\032!.AskTopBalancesDescendingResponse\"\000B" +
      "!\n\035io.github.cryptoofun.genprotoP\001b\006prot" +
      "o3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_AskCashBalanceRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_AskCashBalanceRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_AskCashBalanceRequest_descriptor,
        new java.lang.String[] { "UserId", });
    internal_static_AskCashBalanceResponse_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_AskCashBalanceResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_AskCashBalanceResponse_descriptor,
        new java.lang.String[] { "UserId", "Balance", });
    internal_static_ModifyCashBalanceRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_ModifyCashBalanceRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ModifyCashBalanceRequest_descriptor,
        new java.lang.String[] { "UserId", "Delta", });
    internal_static_ModifyCashBalanceResponse_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_ModifyCashBalanceResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ModifyCashBalanceResponse_descriptor,
        new java.lang.String[] { "UserId", "BalanceAfter", });
    internal_static_AskTopBalancesDescendingRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_AskTopBalancesDescendingRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_AskTopBalancesDescendingRequest_descriptor,
        new java.lang.String[] { "Skip", "Take", });
    internal_static_AskTopBalancesDescendingResponse_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_AskTopBalancesDescendingResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_AskTopBalancesDescendingResponse_descriptor,
        new java.lang.String[] { "Balances", });
    internal_static_BalanceItem_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_BalanceItem_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_BalanceItem_descriptor,
        new java.lang.String[] { "UserId", "Balance", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
