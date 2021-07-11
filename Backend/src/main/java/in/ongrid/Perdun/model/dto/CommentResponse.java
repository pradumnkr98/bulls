package in.ongrid.Perdun.model.dto;

import java.util.Date;

public class CommentResponse {
    Long id;
    String comment;
    String commentBy;
    String created;
    String profilePictureUrl;

    public String getProfilePictureUrl() {
        return profilePictureUrl;
    }

    public void setProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
    }

    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getCommentBy() {
        return commentBy;
    }

    public void setCommentBy(String commentBy) {
        this.commentBy = commentBy;
    }

    public CommentResponse(Long id, String comment, String commentBy, String created, String profilePictureUrl) {
        this.id = id;
        this.comment = comment;
        this.commentBy = commentBy;
        this.created = created;
        this.profilePictureUrl = profilePictureUrl;
    }

    public CommentResponse(Long id, String comment, String commentBy) {
        this.id = id;
        this.comment = comment;
        this.commentBy = commentBy;
    }

    public CommentResponse(){}
}
