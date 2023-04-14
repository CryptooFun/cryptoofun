/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 0.0.0
 * source: cash_wallet.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export class AskCashBalanceRequest extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        user_id?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("user_id" in data && data.user_id != undefined) {
                this.user_id = data.user_id;
            }
        }
    }
    get user_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set user_id(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        user_id?: string;
    }): AskCashBalanceRequest {
        const message = new AskCashBalanceRequest({});
        if (data.user_id != null) {
            message.user_id = data.user_id;
        }
        return message;
    }
    toObject() {
        const data: {
            user_id?: string;
        } = {};
        if (this.user_id != null) {
            data.user_id = this.user_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.user_id.length)
            writer.writeString(1, this.user_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AskCashBalanceRequest {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AskCashBalanceRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.user_id = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AskCashBalanceRequest {
        return AskCashBalanceRequest.deserialize(bytes);
    }
}
export class AskCashBalanceResponse extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        user_id?: string;
        balance?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("user_id" in data && data.user_id != undefined) {
                this.user_id = data.user_id;
            }
            if ("balance" in data && data.balance != undefined) {
                this.balance = data.balance;
            }
        }
    }
    get user_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set user_id(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get balance() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set balance(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        user_id?: string;
        balance?: number;
    }): AskCashBalanceResponse {
        const message = new AskCashBalanceResponse({});
        if (data.user_id != null) {
            message.user_id = data.user_id;
        }
        if (data.balance != null) {
            message.balance = data.balance;
        }
        return message;
    }
    toObject() {
        const data: {
            user_id?: string;
            balance?: number;
        } = {};
        if (this.user_id != null) {
            data.user_id = this.user_id;
        }
        if (this.balance != null) {
            data.balance = this.balance;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.user_id.length)
            writer.writeString(1, this.user_id);
        if (this.balance != 0)
            writer.writeDouble(2, this.balance);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AskCashBalanceResponse {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AskCashBalanceResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.user_id = reader.readString();
                    break;
                case 2:
                    message.balance = reader.readDouble();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AskCashBalanceResponse {
        return AskCashBalanceResponse.deserialize(bytes);
    }
}
export class ModifyCashBalanceRequest extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        user_id?: string;
        delta?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("user_id" in data && data.user_id != undefined) {
                this.user_id = data.user_id;
            }
            if ("delta" in data && data.delta != undefined) {
                this.delta = data.delta;
            }
        }
    }
    get user_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set user_id(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get delta() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set delta(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        user_id?: string;
        delta?: number;
    }): ModifyCashBalanceRequest {
        const message = new ModifyCashBalanceRequest({});
        if (data.user_id != null) {
            message.user_id = data.user_id;
        }
        if (data.delta != null) {
            message.delta = data.delta;
        }
        return message;
    }
    toObject() {
        const data: {
            user_id?: string;
            delta?: number;
        } = {};
        if (this.user_id != null) {
            data.user_id = this.user_id;
        }
        if (this.delta != null) {
            data.delta = this.delta;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.user_id.length)
            writer.writeString(1, this.user_id);
        if (this.delta != 0)
            writer.writeDouble(2, this.delta);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModifyCashBalanceRequest {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ModifyCashBalanceRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.user_id = reader.readString();
                    break;
                case 2:
                    message.delta = reader.readDouble();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ModifyCashBalanceRequest {
        return ModifyCashBalanceRequest.deserialize(bytes);
    }
}
export class ModifyCashBalanceResponse extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        user_id?: string;
        balance_after?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("user_id" in data && data.user_id != undefined) {
                this.user_id = data.user_id;
            }
            if ("balance_after" in data && data.balance_after != undefined) {
                this.balance_after = data.balance_after;
            }
        }
    }
    get user_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set user_id(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get balance_after() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set balance_after(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        user_id?: string;
        balance_after?: number;
    }): ModifyCashBalanceResponse {
        const message = new ModifyCashBalanceResponse({});
        if (data.user_id != null) {
            message.user_id = data.user_id;
        }
        if (data.balance_after != null) {
            message.balance_after = data.balance_after;
        }
        return message;
    }
    toObject() {
        const data: {
            user_id?: string;
            balance_after?: number;
        } = {};
        if (this.user_id != null) {
            data.user_id = this.user_id;
        }
        if (this.balance_after != null) {
            data.balance_after = this.balance_after;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.user_id.length)
            writer.writeString(1, this.user_id);
        if (this.balance_after != 0)
            writer.writeDouble(2, this.balance_after);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModifyCashBalanceResponse {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ModifyCashBalanceResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.user_id = reader.readString();
                    break;
                case 2:
                    message.balance_after = reader.readDouble();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ModifyCashBalanceResponse {
        return ModifyCashBalanceResponse.deserialize(bytes);
    }
}
interface GrpcUnaryServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
}
interface GrpcStreamServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
}
interface GrpWritableServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
}
interface GrpcChunkServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
}
interface GrpcPromiseServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
    (message: P, options?: grpc_1.CallOptions): Promise<R>;
}
export abstract class UnimplementedCashWalletServiceService {
    static definition = {
        AskCashBalance: {
            path: "/CashWalletService/AskCashBalance",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: AskCashBalanceRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => AskCashBalanceRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: AskCashBalanceResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => AskCashBalanceResponse.deserialize(new Uint8Array(bytes))
        },
        ModifyCashBalance: {
            path: "/CashWalletService/ModifyCashBalance",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: ModifyCashBalanceRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => ModifyCashBalanceRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: ModifyCashBalanceResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => ModifyCashBalanceResponse.deserialize(new Uint8Array(bytes))
        }
    };
    [method: string]: grpc_1.UntypedHandleCall;
    abstract AskCashBalance(call: grpc_1.ServerUnaryCall<AskCashBalanceRequest, AskCashBalanceResponse>, callback: grpc_1.sendUnaryData<AskCashBalanceResponse>): void;
    abstract ModifyCashBalance(call: grpc_1.ServerUnaryCall<ModifyCashBalanceRequest, ModifyCashBalanceResponse>, callback: grpc_1.sendUnaryData<ModifyCashBalanceResponse>): void;
}
export class CashWalletServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedCashWalletServiceService.definition, "CashWalletService", {}) {
    constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
        super(address, credentials, options);
    }
    AskCashBalance: GrpcUnaryServiceInterface<AskCashBalanceRequest, AskCashBalanceResponse> = (message: AskCashBalanceRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<AskCashBalanceResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<AskCashBalanceResponse>, callback?: grpc_1.requestCallback<AskCashBalanceResponse>): grpc_1.ClientUnaryCall => {
        return super.AskCashBalance(message, metadata, options, callback);
    };
    ModifyCashBalance: GrpcUnaryServiceInterface<ModifyCashBalanceRequest, ModifyCashBalanceResponse> = (message: ModifyCashBalanceRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<ModifyCashBalanceResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<ModifyCashBalanceResponse>, callback?: grpc_1.requestCallback<ModifyCashBalanceResponse>): grpc_1.ClientUnaryCall => {
        return super.ModifyCashBalance(message, metadata, options, callback);
    };
}
