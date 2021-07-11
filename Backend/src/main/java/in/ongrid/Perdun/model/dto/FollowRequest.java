package in.ongrid.Perdun.model.dto;

public class FollowRequest {
    private Long followeeId;

    public FollowRequest(){

    }

    public FollowRequest(Long followeeId) {
        this.followeeId = followeeId;
    }

    public Long getFolloweeId() {
        return followeeId;
    }

    public void setFolloweeId(Long followeeId) {
        this.followeeId = followeeId;
    }
}
