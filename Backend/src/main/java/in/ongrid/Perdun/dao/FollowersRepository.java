package in.ongrid.Perdun.dao;

import in.ongrid.Perdun.model.entity.Followers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FollowersRepository extends JpaRepository<Followers, Long> {

    Followers getById(Long id);
}
