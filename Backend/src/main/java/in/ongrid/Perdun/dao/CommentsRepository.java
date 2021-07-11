package in.ongrid.Perdun.dao;

import in.ongrid.Perdun.model.entity.Comments;
import in.ongrid.Perdun.model.entity.Posts;
import in.ongrid.Perdun.model.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentsRepository extends JpaRepository<Comments,Long> {

    List<Comments> findAllByPost(Posts post);
    Comments findByPostAndUser(Posts post, Users user);
}
