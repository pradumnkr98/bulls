package in.ongrid.Perdun.model.dto;

public class OtpResponse {

    private Long otp;
    private String mobile;

    public OtpResponse(){}

    public OtpResponse(Long otp, String mobile) {
        this.otp = otp;
        this.mobile = mobile;
    }

    public Long getOtp() {
        return otp;
    }

    public void setOtp(Long otp) {
        this.otp = otp;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
