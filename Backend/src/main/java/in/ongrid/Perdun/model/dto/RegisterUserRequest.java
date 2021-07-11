package in.ongrid.Perdun.model.dto;

public class RegisterUserRequest {

    private String mobile;
    private Long otp;
    private String password;

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Long getOtp() {
        return otp;
    }

    public void setOtp(Long otp) {
        this.otp = otp;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public RegisterUserRequest(){}

    public RegisterUserRequest(String mobile, Long otp, String password) {
        this.mobile = mobile;
        this.otp = otp;
        this.password = password;
    }
}
