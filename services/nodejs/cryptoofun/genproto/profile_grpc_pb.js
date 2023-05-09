// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var profile_pb = require('./profile_pb.js');

function serialize_GetProfileInfoByUserIdsRequest(arg) {
  if (!(arg instanceof profile_pb.GetProfileInfoByUserIdsRequest)) {
    throw new Error('Expected argument of type GetProfileInfoByUserIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetProfileInfoByUserIdsRequest(buffer_arg) {
  return profile_pb.GetProfileInfoByUserIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetProfileInfoByUserIdsResponse(arg) {
  if (!(arg instanceof profile_pb.GetProfileInfoByUserIdsResponse)) {
    throw new Error('Expected argument of type GetProfileInfoByUserIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetProfileInfoByUserIdsResponse(buffer_arg) {
  return profile_pb.GetProfileInfoByUserIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProfileServiceService = exports.ProfileServiceService = {
  getProfileInfoByUserIds: {
    path: '/ProfileService/GetProfileInfoByUserIds',
    requestStream: false,
    responseStream: false,
    requestType: profile_pb.GetProfileInfoByUserIdsRequest,
    responseType: profile_pb.GetProfileInfoByUserIdsResponse,
    requestSerialize: serialize_GetProfileInfoByUserIdsRequest,
    requestDeserialize: deserialize_GetProfileInfoByUserIdsRequest,
    responseSerialize: serialize_GetProfileInfoByUserIdsResponse,
    responseDeserialize: deserialize_GetProfileInfoByUserIdsResponse,
  },
};

exports.ProfileServiceClient = grpc.makeGenericClientConstructor(ProfileServiceService);
