package in.ongrid.Perdun.model.dto;

public class RegisteredUserResponse {

    private Long id;
    private String mobile;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public RegisteredUserResponse(){}
    public RegisteredUserResponse(Long id, String mobile) {
        this.id = id;
        this.mobile = mobile;
    }
}
