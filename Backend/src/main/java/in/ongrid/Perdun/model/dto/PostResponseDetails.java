package in.ongrid.Perdun.model.dto;

import java.util.List;

public class PostResponseDetails {

    private Long userId;
    private String userName;
    private String profilePictureUrl;
    private String imageUrl;
    private String text;
    private Long postId;
    private Long likes;

    public PostResponseDetails(Long userId, String userName, String imageUrl, String text, Long postId, Long likes, String profilePictureUrl) {
        this.userId = userId;
        this.userName = userName;
        this.imageUrl = imageUrl;
        this.text = text;
        this.postId = postId;
        this.likes = likes;
        this.profilePictureUrl = profilePictureUrl;
    }

    public String getProfilePictureUrl() {
        return profilePictureUrl;
    }

    public void setProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
    }

    public Long getLikes() {
        return likes;
    }

    public void setLikes(Long likes) {
        this.likes = likes;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }
}
