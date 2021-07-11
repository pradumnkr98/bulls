package in.ongrid.Perdun.dao;

import in.ongrid.Perdun.model.entity.Posts;
import in.ongrid.Perdun.model.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface PostsRepository extends JpaRepository<Posts,Long> {

    List<Posts> getByUsers(Users user);

    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    bearbulls.posts p\n" +
            "WHERE\n" +
            "    p.users_id IN (SELECT \n" +
            "            followers_id\n" +
            "        FROM\n" +
            "            bearbulls.followers_user\n" +
            "        WHERE\n" +
            "            users_id = :usersId)", nativeQuery = true)
    Set<Posts> getAll(Long usersId);
}
