package in.ongrid.Perdun.model.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="users")
public class Users extends ResourceInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "mobile",nullable = false,unique = true)
    private String mobile;

    @Column(name = "password",nullable = false)
    private String password;

    @Column(name = "name")
    private String name;

    @Column(name = "dob")
    private String dob;

    @Column(name = "profile_picture_url")
    private String profilePictureUrl;

    @Column(name = "portfolio_url")
    private String portfolioUrl;


    @OneToMany(mappedBy = "users",cascade = CascadeType.ALL)
    List<EducationDetails> educationDetailsList=new ArrayList<>();

    @OneToMany(mappedBy = "users",cascade = CascadeType.ALL)
    List<ExperienceDetails> experienceDetailsList=new ArrayList<>();

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    List<Comments>commentsList=new ArrayList<>();

    @OneToMany(mappedBy = "users",cascade = CascadeType.ALL)
    List<Posts>postsList=new ArrayList<>();

    @OneToMany(mappedBy = "users",cascade = CascadeType.ALL)
    List<Likes>likesList=new ArrayList<>();

    @ManyToMany(mappedBy = "users", cascade = CascadeType.ALL)
    Set<Followers> followers;

    public List<Likes> getLikesList() {
        return likesList;
    }

    public void setLikesList(List<Likes> likesList) {
        this.likesList = likesList;
    }

    public Set<Followers> getUsers() {
        return followers;
    }

    public void setUsers(Set<Followers> followers) {
        this.followers = followers;
    }

    public String getProfilePictureUrl() {
        return profilePictureUrl;
    }

    public void setProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
    }

    public String getPortfolioUrl() {
        return portfolioUrl;
    }

    public void setPortfolioUrl(String portfolioUrl) {
        this.portfolioUrl = portfolioUrl;
    }

    public List<Comments> getCommentsList() {
        return commentsList;
    }

    public void setCommentsList(List<Comments> commentsList) {
        this.commentsList = commentsList;
    }

    public List<Posts> getPostsList() {
        return postsList;
    }

    public void setPostsList(List<Posts> postsList) {
        this.postsList = postsList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public List<EducationDetails> getEducationDetailsList() {
        return educationDetailsList;
    }

    public void setEducationDetailsList(List<EducationDetails> educationDetailsList) {
        this.educationDetailsList = educationDetailsList;
    }

    public List<ExperienceDetails> getExperienceDetailsList() {
        return experienceDetailsList;
    }

    public void setExperienceDetailsList(List<ExperienceDetails> experienceDetailsList) {
        this.experienceDetailsList = experienceDetailsList;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", mobile='" + mobile + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", dob='" + dob + '\'' +
                ", profilePicture='" + profilePictureUrl + '\'' +
                ", portfolio='" + portfolioUrl + '\'' +
                '}';
    }
}
