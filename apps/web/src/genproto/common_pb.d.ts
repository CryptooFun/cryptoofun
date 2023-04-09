// package: 
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GreetingMsg extends jspb.Message { 
    getBody(): string;
    setBody(value: string): GreetingMsg;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreetingMsg.AsObject;
    static toObject(includeInstance: boolean, msg: GreetingMsg): GreetingMsg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreetingMsg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreetingMsg;
    static deserializeBinaryFromReader(message: GreetingMsg, reader: jspb.BinaryReader): GreetingMsg;
}

export namespace GreetingMsg {
    export type AsObject = {
        body: string,
    }
}
