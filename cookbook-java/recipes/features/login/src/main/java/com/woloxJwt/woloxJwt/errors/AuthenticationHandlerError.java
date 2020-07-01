package com.woloxJwt.woloxJwt.errors;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthenticationHandlerError {

    public static ObjectMapper getException(final HttpServletResponse response, final HttpStatus status, final int code, final String message) throws IOException {
        final ErrorData authenticationError = ErrorData.builder()
                .code(code)
                .message(message)
                .build();
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setStatus(status.value());
        response.setContentType("application/json");
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.writeValue(response.getWriter(), authenticationError);
        return objectMapper;
    }
}
