package in.ongrid.Perdun.model.dto;

public class PostRequest {

    private String text;
    private String imageUrl;
    private Long userId;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public PostRequest(String text, String imageUrl, Long userId) {
        this.text = text;
        this.imageUrl = imageUrl;
        this.userId = userId;
    }

    public PostRequest(){}
}
