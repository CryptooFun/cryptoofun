// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cash_wallet_pb = require('./cash_wallet_pb.js');

function serialize_AskCashBalanceRequest(arg) {
  if (!(arg instanceof cash_wallet_pb.AskCashBalanceRequest)) {
    throw new Error('Expected argument of type AskCashBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AskCashBalanceRequest(buffer_arg) {
  return cash_wallet_pb.AskCashBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AskCashBalanceResponse(arg) {
  if (!(arg instanceof cash_wallet_pb.AskCashBalanceResponse)) {
    throw new Error('Expected argument of type AskCashBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AskCashBalanceResponse(buffer_arg) {
  return cash_wallet_pb.AskCashBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AskTopBalancesDescendingRequest(arg) {
  if (!(arg instanceof cash_wallet_pb.AskTopBalancesDescendingRequest)) {
    throw new Error('Expected argument of type AskTopBalancesDescendingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AskTopBalancesDescendingRequest(buffer_arg) {
  return cash_wallet_pb.AskTopBalancesDescendingRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_AskTopBalancesDescendingResponse(arg) {
  if (!(arg instanceof cash_wallet_pb.AskTopBalancesDescendingResponse)) {
    throw new Error('Expected argument of type AskTopBalancesDescendingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AskTopBalancesDescendingResponse(buffer_arg) {
  return cash_wallet_pb.AskTopBalancesDescendingResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_ModifyCashBalanceRequest(arg) {
  if (!(arg instanceof cash_wallet_pb.ModifyCashBalanceRequest)) {
    throw new Error('Expected argument of type ModifyCashBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ModifyCashBalanceRequest(buffer_arg) {
  return cash_wallet_pb.ModifyCashBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ModifyCashBalanceResponse(arg) {
  if (!(arg instanceof cash_wallet_pb.ModifyCashBalanceResponse)) {
    throw new Error('Expected argument of type ModifyCashBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ModifyCashBalanceResponse(buffer_arg) {
  return cash_wallet_pb.ModifyCashBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

var CashWalletServiceService = (exports.CashWalletServiceService = {
  askCashBalance: {
    path: '/CashWalletService/AskCashBalance',
    requestStream: false,
    responseStream: false,
    requestType: cash_wallet_pb.AskCashBalanceRequest,
    responseType: cash_wallet_pb.AskCashBalanceResponse,
    requestSerialize: serialize_AskCashBalanceRequest,
    requestDeserialize: deserialize_AskCashBalanceRequest,
    responseSerialize: serialize_AskCashBalanceResponse,
    responseDeserialize: deserialize_AskCashBalanceResponse,
  },
  modifyCashBalance: {
    path: '/CashWalletService/ModifyCashBalance',
    requestStream: false,
    responseStream: false,
    requestType: cash_wallet_pb.ModifyCashBalanceRequest,
    responseType: cash_wallet_pb.ModifyCashBalanceResponse,
    requestSerialize: serialize_ModifyCashBalanceRequest,
    requestDeserialize: deserialize_ModifyCashBalanceRequest,
    responseSerialize: serialize_ModifyCashBalanceResponse,
    responseDeserialize: deserialize_ModifyCashBalanceResponse,
  },
  askTopBalancesDescending: {
    path: '/CashWalletService/AskTopBalancesDescending',
    requestStream: false,
    responseStream: false,
    requestType: cash_wallet_pb.AskTopBalancesDescendingRequest,
    responseType: cash_wallet_pb.AskTopBalancesDescendingResponse,
    requestSerialize: serialize_AskTopBalancesDescendingRequest,
    requestDeserialize: deserialize_AskTopBalancesDescendingRequest,
    responseSerialize: serialize_AskTopBalancesDescendingResponse,
    responseDeserialize: deserialize_AskTopBalancesDescendingResponse,
  },
});

exports.CashWalletServiceClient = grpc.makeGenericClientConstructor(CashWalletServiceService);
