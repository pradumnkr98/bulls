package in.ongrid.Perdun.model.dto;

public class OtpRequest {
    String mobile;

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public OtpRequest(String mobile) {
        this.mobile = mobile;
    }

    public OtpRequest(){}
}
