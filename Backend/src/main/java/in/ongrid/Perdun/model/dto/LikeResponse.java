package in.ongrid.Perdun.model.dto;

public class LikeResponse {

    private Long postId;
    private Long likesCount;

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public Long getLikesCount() {
        return likesCount;
    }

    public void setLikesCount(Long likesCount) {
        this.likesCount = likesCount;
    }

    public LikeResponse(Long postId, Long likesCount) {
        this.postId = postId;
        this.likesCount = likesCount;
    }

    public LikeResponse(){}
}
