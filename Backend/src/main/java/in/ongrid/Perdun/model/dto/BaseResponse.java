package in.ongrid.Perdun.model.dto;

import org.springframework.http.HttpStatus;

public class BaseResponse<T>{

    private int code;
    private String msg;
    private T data;

    public BaseResponse(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public BaseResponse(int code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public BaseResponse(T data) {
        this.data = data;
        this.code = HttpStatus.OK.value();
    }

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

    public T getData() {
        return data;
    }
}
