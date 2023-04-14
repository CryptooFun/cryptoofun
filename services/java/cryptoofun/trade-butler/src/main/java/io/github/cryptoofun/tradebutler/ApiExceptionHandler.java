package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.tradebutler.exception.BaseHttpError;
import io.github.cryptoofun.tradebutler.exception.CommandServiceException;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(CommandServiceException.class)
    protected ResponseEntity<Object> handleCommandServiceException(CommandServiceException ex) {
        return buildResponseEntity(new BaseHttpError(ex.getCode(), ex.getMessage()));
    }

    private ResponseEntity<Object> buildResponseEntity(BaseHttpError httpError) {
        return new ResponseEntity<>(httpError, httpError.getStatus());
    }
}
