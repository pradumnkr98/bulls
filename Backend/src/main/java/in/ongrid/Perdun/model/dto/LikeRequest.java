package in.ongrid.Perdun.model.dto;

public class LikeRequest {
    private Long userId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LikeRequest(Long userId) {
        this.userId = userId;
    }

    public LikeRequest(){}
}
