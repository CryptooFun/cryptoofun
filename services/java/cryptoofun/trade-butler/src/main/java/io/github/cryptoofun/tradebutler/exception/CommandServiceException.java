package io.github.cryptoofun.tradebutler.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class CommandServiceException extends Exception {

    private HttpStatus code;

    public CommandServiceException(String message, HttpStatus code) {
        super(message);
        this.code = code;
    }

    public CommandServiceException(String message, HttpStatus code, Throwable cause) {
        super(message, cause);
        this.code = code;
    }
}
