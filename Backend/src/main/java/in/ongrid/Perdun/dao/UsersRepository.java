package in.ongrid.Perdun.dao;

import in.ongrid.Perdun.model.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users,Long> {
    Users findByMobile(String mobile);
    Users getById(Long id);

    List<Users> findByNameContaining(String name);
}
