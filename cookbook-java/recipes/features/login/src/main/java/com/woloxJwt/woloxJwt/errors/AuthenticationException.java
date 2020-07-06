package com.woloxJwt.woloxJwt.errors;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class AuthenticationException extends RuntimeException{
    private HttpStatus status;
    private Integer errorCode;

    public AuthenticationException(final String message, final HttpStatus status) {
        super(message);
        this.status = status;
        this.errorCode = status.value();
    }

}
