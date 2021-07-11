package in.ongrid.Perdun.model.entity;

import javax.persistence.*;

@Entity
public class Posts extends ResourceInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String text;

    @Column
    private String imageUrl;

    @ManyToOne
    private Users users;

    @ManyToOne
    private Comments comments;

    public Comments getComments() {
        return comments;
    }

    public void setComments(Comments comments) {
        this.comments = comments;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Posts(){}
    public Posts(String text, String imageUrl, Users users, Comments comments) {
        this.text = text;
        this.imageUrl = imageUrl;
        this.users = users;
        this.comments = comments;
    }

    public Posts(String text, String imageUrl, Users users) {
        this.text = text;
        this.imageUrl = imageUrl;
        this.users = users;
    }
}
