// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: portfolio.proto

package io.github.cryptoofun.genproto;

public interface PortfolioItemOrBuilder extends
    // @@protoc_insertion_point(interface_extends:PortfolioItem)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string ticker = 1 [json_name = "ticker"];</code>
   * @return The ticker.
   */
  java.lang.String getTicker();
  /**
   * <code>string ticker = 1 [json_name = "ticker"];</code>
   * @return The bytes for ticker.
   */
  com.google.protobuf.ByteString
      getTickerBytes();

  /**
   * <code>double cost = 2 [json_name = "cost"];</code>
   * @return The cost.
   */
  double getCost();

  /**
   * <code>double amount = 3 [json_name = "amount"];</code>
   * @return The amount.
   */
  double getAmount();
}
