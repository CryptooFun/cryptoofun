package io.github.cryptoofun.tradebutler.utility;

import io.grpc.Status;
import org.springframework.http.HttpStatus;

public class ApiStatusMapper {

    public static HttpStatus mapGrpcToHttp(Status grpcStatus) {
        return switch (grpcStatus.getCode()) {
            case OK -> HttpStatus.OK;
            case CANCELLED -> HttpStatus.NO_CONTENT;
            case UNKNOWN -> HttpStatus.INTERNAL_SERVER_ERROR;
            case INVALID_ARGUMENT -> HttpStatus.BAD_REQUEST;
            case DEADLINE_EXCEEDED -> HttpStatus.GATEWAY_TIMEOUT;
            case NOT_FOUND -> HttpStatus.NOT_FOUND;
            case ALREADY_EXISTS -> HttpStatus.CONFLICT;
            case PERMISSION_DENIED -> HttpStatus.FORBIDDEN;
            case UNAUTHENTICATED -> HttpStatus.UNAUTHORIZED;
            case RESOURCE_EXHAUSTED -> HttpStatus.TOO_MANY_REQUESTS;
            case ABORTED -> HttpStatus.CONFLICT;
            case OUT_OF_RANGE -> HttpStatus.BAD_REQUEST;
            case UNIMPLEMENTED -> HttpStatus.NOT_IMPLEMENTED;
            case INTERNAL -> HttpStatus.INTERNAL_SERVER_ERROR;
            case UNAVAILABLE -> HttpStatus.SERVICE_UNAVAILABLE;
            case DATA_LOSS -> HttpStatus.INTERNAL_SERVER_ERROR;
            default -> HttpStatus.INTERNAL_SERVER_ERROR;
        };
    }
}
