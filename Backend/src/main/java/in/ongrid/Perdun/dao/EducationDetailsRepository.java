package in.ongrid.Perdun.dao;

import in.ongrid.Perdun.model.entity.EducationDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EducationDetailsRepository extends JpaRepository<EducationDetails,Long> {

    List<EducationDetails> getByUsersId(Long usersId);
}
