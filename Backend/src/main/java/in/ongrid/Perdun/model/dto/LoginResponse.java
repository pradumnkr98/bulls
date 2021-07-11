package in.ongrid.Perdun.model.dto;

public class LoginResponse {

    Long userId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LoginResponse(Long userId) {
        this.userId = userId;
    }

    public LoginResponse(){}
}
