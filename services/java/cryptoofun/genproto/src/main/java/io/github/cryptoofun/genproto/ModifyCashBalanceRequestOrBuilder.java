// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: cash_wallet.proto

package io.github.cryptoofun.genproto;

public interface ModifyCashBalanceRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:ModifyCashBalanceRequest)
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
   * <code>double delta = 2 [json_name = "delta"];</code>
   * @return The delta.
   */
  double getDelta();
}
