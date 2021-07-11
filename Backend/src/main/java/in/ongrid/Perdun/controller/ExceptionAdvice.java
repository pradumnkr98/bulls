package in.ongrid.Perdun.controller;

import in.ongrid.Perdun.model.dto.BaseResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler(value = { IllegalArgumentException.class, IllegalStateException.class })
    protected BaseResponse<Object> handleConflict( RuntimeException ex, WebRequest request) {

        return new BaseResponse<Object>(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    }
}
