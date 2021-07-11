package in.ongrid.Perdun.model.dto;

public class CommentRequest {

    String comment;
    Long userId;

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public CommentRequest(String comment, Long userId) {
        this.comment = comment;
        this.userId = userId;
    }

    public CommentRequest(){}
}
