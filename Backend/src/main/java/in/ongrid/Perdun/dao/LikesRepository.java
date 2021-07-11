package in.ongrid.Perdun.dao;

import in.ongrid.Perdun.model.entity.Likes;
import in.ongrid.Perdun.model.entity.Posts;
import in.ongrid.Perdun.model.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikesRepository extends JpaRepository<Likes,Long> {

    Likes findByUsersAndPosts(Users user, Posts post);
    List<Likes> findAllByPosts(Posts post);
}
