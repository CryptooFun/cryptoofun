// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var portfolio_pb = require('./portfolio_pb.js');

function serialize_AskPortfolioRequest(arg) {
  if (!(arg instanceof portfolio_pb.AskPortfolioRequest)) {
    throw new Error('Expected argument of type AskPortfolioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AskPortfolioRequest(buffer_arg) {
  return portfolio_pb.AskPortfolioRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AskPortfolioResponse(arg) {
  if (!(arg instanceof portfolio_pb.AskPortfolioResponse)) {
    throw new Error('Expected argument of type AskPortfolioResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AskPortfolioResponse(buffer_arg) {
  return portfolio_pb.AskPortfolioResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ModifySingleTickerRequest(arg) {
  if (!(arg instanceof portfolio_pb.ModifySingleTickerRequest)) {
    throw new Error('Expected argument of type ModifySingleTickerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ModifySingleTickerRequest(buffer_arg) {
  return portfolio_pb.ModifySingleTickerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ModifySingleTickerResponse(arg) {
  if (!(arg instanceof portfolio_pb.ModifySingleTickerResponse)) {
    throw new Error('Expected argument of type ModifySingleTickerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ModifySingleTickerResponse(buffer_arg) {
  return portfolio_pb.ModifySingleTickerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

var PortfolioServiceService = (exports.PortfolioServiceService = {
  askPortfolio: {
    path: '/PortfolioService/AskPortfolio',
    requestStream: false,
    responseStream: false,
    requestType: portfolio_pb.AskPortfolioRequest,
    responseType: portfolio_pb.AskPortfolioResponse,
    requestSerialize: serialize_AskPortfolioRequest,
    requestDeserialize: deserialize_AskPortfolioRequest,
    responseSerialize: serialize_AskPortfolioResponse,
    responseDeserialize: deserialize_AskPortfolioResponse,
  },
  modifySingleTicker: {
    path: '/PortfolioService/ModifySingleTicker',
    requestStream: false,
    responseStream: false,
    requestType: portfolio_pb.ModifySingleTickerRequest,
    responseType: portfolio_pb.ModifySingleTickerResponse,
    requestSerialize: serialize_ModifySingleTickerRequest,
    requestDeserialize: deserialize_ModifySingleTickerRequest,
    responseSerialize: serialize_ModifySingleTickerResponse,
    responseDeserialize: deserialize_ModifySingleTickerResponse,
  },
});

exports.PortfolioServiceClient = grpc.makeGenericClientConstructor(PortfolioServiceService);
