// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: cash_wallet.proto

package io.github.cryptoofun.genproto;

public interface BalanceItemOrBuilder extends
    // @@protoc_insertion_point(interface_extends:BalanceItem)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string user_id = 1 [json_name = "userId"];</code>
   * @return The userId.
   */
  java.lang.String getUserId();
  /**
   * <code>string user_id = 1 [json_name = "userId"];</code>
   * @return The bytes for userId.
   */
  com.google.protobuf.ByteString
      getUserIdBytes();

  /**
   * <code>double balance = 2 [json_name = "balance"];</code>
   * @return The balance.
   */
  double getBalance();
}
