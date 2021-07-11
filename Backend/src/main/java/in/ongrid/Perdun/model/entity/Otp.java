package in.ongrid.Perdun.model.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Otp extends ResourceInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String mobile;

    @Column(nullable = false)
    private Long otp;

    @Column(nullable = false)
    private Date expiryTime;

    public Otp() {}

    public Date getExpiryTime() {
        return expiryTime;
    }

    public void setExpiryTime(Date expiryTime) {
        this.expiryTime = expiryTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Long getOtp() {
        return otp;
    }

    public void setOtp(Long otp) {
        this.otp = otp;
    }

    @Override
    public String toString() {
        return "Otp{" +
                "id=" + id +
                ", mobile='" + mobile + '\'' +
                ", otp=" + otp +
                '}';
    }

    public Otp(String mobile, Long otp, Date expiryTime) {
        this.mobile = mobile;
        this.otp = otp;
        this.expiryTime=expiryTime;
    }
}
