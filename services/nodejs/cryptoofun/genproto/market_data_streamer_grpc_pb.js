// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var market_data_streamer_pb = require('./market_data_streamer_pb.js');

function serialize_EnquireMarketPriceRequest(arg) {
  if (!(arg instanceof market_data_streamer_pb.EnquireMarketPriceRequest)) {
    throw new Error('Expected argument of type EnquireMarketPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_EnquireMarketPriceRequest(buffer_arg) {
  return market_data_streamer_pb.EnquireMarketPriceRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_EnquireMarketPriceResponse(arg) {
  if (!(arg instanceof market_data_streamer_pb.EnquireMarketPriceResponse)) {
    throw new Error('Expected argument of type EnquireMarketPriceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_EnquireMarketPriceResponse(buffer_arg) {
  return market_data_streamer_pb.EnquireMarketPriceResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var MarketDataStreamerServiceService = (exports.MarketDataStreamerServiceService = {
  enquireMarketPrice: {
    path: '/MarketDataStreamerService/EnquireMarketPrice',
    requestStream: false,
    responseStream: false,
    requestType: market_data_streamer_pb.EnquireMarketPriceRequest,
    responseType: market_data_streamer_pb.EnquireMarketPriceResponse,
    requestSerialize: serialize_EnquireMarketPriceRequest,
    requestDeserialize: deserialize_EnquireMarketPriceRequest,
    responseSerialize: serialize_EnquireMarketPriceResponse,
    responseDeserialize: deserialize_EnquireMarketPriceResponse,
  },
});

exports.MarketDataStreamerServiceClient = grpc.makeGenericClientConstructor(
  MarketDataStreamerServiceService
);
