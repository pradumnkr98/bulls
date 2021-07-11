package in.ongrid.Perdun.service;

import in.ongrid.Perdun.model.dto.OtpRequest;
import in.ongrid.Perdun.model.dto.OtpResponse;

public interface GetOtp {

    OtpResponse generateOtp(OtpRequest otpRequest);
}
