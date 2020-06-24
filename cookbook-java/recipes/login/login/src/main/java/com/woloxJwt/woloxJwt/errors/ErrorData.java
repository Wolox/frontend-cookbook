package com.woloxJwt.woloxJwt.errors;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ErrorData {
    private String message;
    private int code;
}
