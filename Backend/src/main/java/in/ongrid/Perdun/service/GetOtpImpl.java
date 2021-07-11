package in.ongrid.Perdun.service;

import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber;
import in.ongrid.Perdun.dao.OtpRepository;
import in.ongrid.Perdun.model.dto.OtpRequest;
import in.ongrid.Perdun.model.dto.OtpResponse;
import in.ongrid.Perdun.model.entity.Otp;
import in.ongrid.Perdun.model.entity.TwilioConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

@Service
public class GetOtpImpl implements GetOtp {

    private final TwilioConfig twilioConfig;

    @Autowired
    OtpRepository otpRepository;

    @Autowired
    public GetOtpImpl(TwilioConfig twilioConfig){
        this.twilioConfig=twilioConfig;
    }

    Random rnd = new Random();
    int number = rnd.nextInt(999999);
    String otp=String.format("%06d", number);

    @Override
    public OtpResponse generateOtp(OtpRequest otpRequest) {

        if(otpRequest.getMobile() == null){
            throw new IllegalArgumentException("Mobile Number cannot be Null.");
        }

        Date expiryTime = new Date(System.currentTimeMillis() + TimeUnit.MINUTES.toMillis(5));
        Otp otp_object = new Otp(otpRequest.getMobile(), Long.parseLong(otp), expiryTime);

        if(otpRepository.findByMobile(otpRequest.getMobile()) == null) {
            otpRepository.save(otp_object);
        }else{
            Otp otp = otpRepository.findByMobile(otpRequest.getMobile());
            otpRepository.delete(otp);
        }

        MessageCreator creator= Message.creator(new PhoneNumber(otpRequest.getMobile()),new PhoneNumber("+18327891705"),otp);

        OtpResponse response = new OtpResponse(Long.parseLong(otp), otpRequest.getMobile());
        return response;
    }
}
