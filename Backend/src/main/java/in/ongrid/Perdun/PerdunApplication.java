package in.ongrid.Perdun;

import in.ongrid.Perdun.dao.OtpRepository;
import in.ongrid.Perdun.model.entity.Otp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Optional;

@SpringBootApplication
public class PerdunApplication {

	public static void main(String[] args) {

		ApplicationContext context= SpringApplication.run(PerdunApplication.class, args);
		Otp otp;
		//OtpRepository otpRepository=context.getBean(OtpRepository.class);
		//otp= otpRepository.findByMobile("7503664678");
		//System.out.println(otp);

	}

}
