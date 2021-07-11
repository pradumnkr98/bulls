package in.ongrid.Perdun.model.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Followers {

    @Id
    Long id;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "followers_user",joinColumns = @JoinColumn(name = "followers_id"),
            inverseJoinColumns = @JoinColumn(name = "users_id"))
    Set<Users>users = new HashSet<>();

    public Followers(){

    }

    public Followers(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Users> getUsers() {
        return users;
    }

    public void setUsers(Set<Users> users) {
        this.users = users;
    }
}
