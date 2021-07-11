package in.ongrid.Perdun.dao;

import in.ongrid.Perdun.model.entity.Otp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OtpRepository extends JpaRepository<Otp,Long> {
    Otp findByMobile(String mobile);
}
