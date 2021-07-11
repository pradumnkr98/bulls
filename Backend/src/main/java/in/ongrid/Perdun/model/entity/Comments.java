package in.ongrid.Perdun.model.entity;

import javax.persistence.*;

@Entity
public class Comments extends ResourceInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String comment;

    @ManyToOne
    private Users user;

    @ManyToOne
    private Posts post;

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

    public Users getUser() {
        return user;
    }

    public void setUser(Users users) {
        this.user = users;
    }

    public Posts getPost() {
        return post;
    }

    public void setPost(Posts posts) {
        this.post = posts;
    }

    public Comments(){}
    public Comments(String comment, Users user, Posts post) {
        this.comment = comment;
        this.user = user;
        this.post = post;
    }
}
