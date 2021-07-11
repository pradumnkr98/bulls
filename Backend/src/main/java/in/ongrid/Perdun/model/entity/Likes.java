package in.ongrid.Perdun.model.entity;

import javax.persistence.*;

@Entity
public class Likes extends ResourceInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Users users;

    @ManyToOne
    private Posts posts;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Posts getPosts() {
        return posts;
    }

    public void setPosts(Posts posts) {
        this.posts = posts;
    }

    public Likes(){}
    public Likes(Users users, Posts posts) {
        this.users = users;
        this.posts = posts;
    }
}
