package in.ongrid.Perdun.model.dto;

public class ResetPasswordResponse {
    String msg;

    public ResetPasswordResponse(String msg) {
        this.msg = msg;
    }

    public ResetPasswordResponse(){}

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
