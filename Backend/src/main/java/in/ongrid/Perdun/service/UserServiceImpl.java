package in.ongrid.Perdun.service;

import in.ongrid.Perdun.dao.EducationDetailsRepository;
import in.ongrid.Perdun.dao.FollowersRepository;
import in.ongrid.Perdun.dao.OtpRepository;
import in.ongrid.Perdun.dao.UsersRepository;
import in.ongrid.Perdun.model.dto.*;
import in.ongrid.Perdun.model.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    OtpRepository otpRepository;

    @Autowired
    EducationDetailsRepository educationDetailsRepository;

    @Autowired
    FollowersRepository followersRepository;

    @Override
    public RegisteredUserResponse registerUser(RegisterUserRequest registerUserRequest) {

        if (registerUserRequest.getMobile() == null || registerUserRequest.getMobile().isEmpty()) {
            throw new IllegalArgumentException("Mobile Number can not be Null.");
        }

        if (registerUserRequest.getMobile().length() < 10) {
            throw new IllegalArgumentException("Mobile number must contain 10 digits.");
        }

        if (registerUserRequest.getPassword() == null || registerUserRequest.getPassword().isEmpty()) {
            throw new IllegalArgumentException("Password can not be NUll.");
        }

        if (registerUserRequest.getPassword().length() < 8) {
            throw new IllegalArgumentException("Password must be 8 characters long.");
        }

        if (registerUserRequest.getOtp() == null) {
            throw new IllegalArgumentException("Otp can not be null.");
        }

        Otp otp = otpRepository.findByMobile(registerUserRequest.getMobile());

        if (usersRepository.findByMobile(registerUserRequest.getMobile()) != null) {
            throw new IllegalArgumentException("User already Exist");
        }

        if ((new Date()).compareTo(otp.getExpiryTime()) > 0) {
            throw new IllegalArgumentException("Otp expired. Please ask for new Otp.");
        }

        if (!otp.getOtp().equals(registerUserRequest.getOtp())) {
            throw new IllegalArgumentException("Incorrect OTP");
        }

        Users user = new Users();
        user.setMobile(registerUserRequest.getMobile());
        user.setPassword(registerUserRequest.getPassword());

        usersRepository.save(user);
        Followers followers = new Followers(user.getId());
        followersRepository.save(followers);

        RegisteredUserResponse response = new RegisteredUserResponse(user.getId(), user.getMobile());/*remove this*/

        return response;
    }

    @Override
    public UserProfileResponse getUserDetails(Long id) {

        if (id == null) {
            throw new IllegalArgumentException("Id cannot be null");
        }

        Users user = usersRepository.getById(id);

        if (user == null) {
            throw new IllegalArgumentException("User Doesn't Exist!");
        }

        UserProfileResponse userDetails = new UserProfileResponse();
        userDetails.setName(user.getName());
        userDetails.setDob(user.getDob());
        userDetails.setId(id);
        userDetails.setProfilePictureUrl(user.getProfilePictureUrl());
        userDetails.setPortfolioUrl(user.getPortfolioUrl());

        // user.setEducationDetailsList(educationDetailsRepository.getByUsersId(user.getId()));
        List<EducationDetails> educationDetails = user.getEducationDetailsList();

        if (educationDetails.size() != 0) {
            for (EducationDetails edu : educationDetails) {
                EducationDetailsDTO educationDetailsDTO = new EducationDetailsDTO(edu.getDegreeName(),
                        edu.getMajor(),
                        edu.getInstitutionName(),
                        edu.getMarks(),
                        edu.getStartDate(),
                        edu.getEndDate());
                userDetails.setEducationDetails(educationDetailsDTO);
            }
        }

        List<ExperienceDetails> experienceDetails = user.getExperienceDetailsList();

        if (experienceDetails.size() != 0) {
            for (ExperienceDetails exp : experienceDetails) {
                ExperienceDetailsDTO experienceDetailsDTO = new ExperienceDetailsDTO(exp.getOrganisationName(),
                        exp.getStartDate(),
                        exp.getEndDate());
                userDetails.setExperienceDetails(experienceDetailsDTO);
            }
        }

        return userDetails;
    }

    @Override
    public UpdateUserProfileResponse updateUserProfile(Long id, UserProfileRequest userProfile) {

        if (id == null) {
            throw new IllegalArgumentException("Id can not be Null");
        }

        Users user = usersRepository.getById(id);

        if (user == null) {
            throw new IllegalArgumentException("User Doesn't exist!");
        }

        if (userProfile.getName() == null || userProfile.getName().isEmpty()) {
            throw new IllegalArgumentException("Name can not be Null.");
        }

        if (userProfile.getDob() == null) {
            throw new IllegalArgumentException("Date of Birth can not be Null.");
        }

        user.setName(userProfile.getName());
        user.setDob(userProfile.getDob());
        user.setPortfolioUrl(userProfile.getPortfolioUrl());
        user.setProfilePictureUrl(userProfile.getProfilePictureUrl());

        /*Mapping Education Education details from request to Education Details Entity*/

        List<EducationDetails> educationDetailsList = new ArrayList<>();

        EducationDetailsDTO educationDetailsDTO = userProfile.getEducationDetails();
        EducationDetails educationDetails = new EducationDetails(educationDetailsDTO.getDegreeName(),
                educationDetailsDTO.getMajor(), educationDetailsDTO.getInstitutionName(),
                educationDetailsDTO.getMarks(), educationDetailsDTO.getStartDate(),
                educationDetailsDTO.getEndDate(), user);

        educationDetailsList.add(educationDetails);
        user.setEducationDetailsList(educationDetailsList);

        /*Mapping  Experience details from request to Experience Details Entity*/
        List<ExperienceDetails> experienceDetailsList = new ArrayList<>();

        ExperienceDetailsDTO experienceDetailsDTO = userProfile.getExperienceDetails();
        ExperienceDetails experienceDetails = new ExperienceDetails(user, experienceDetailsDTO.getOrganisationName(),
                experienceDetailsDTO.getStartDate(),
                experienceDetailsDTO.getEndDate());


        experienceDetailsList.add(experienceDetails);
        user.setExperienceDetailsList(experienceDetailsList);

        usersRepository.save(user);

        return new UpdateUserProfileResponse(id);
    }

    @Override
    public SearchUserResponse getUsersByName(String name) {

        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Name can not be Null.");
        }

        List<Users> usersList = new ArrayList<>();
        usersList = usersRepository.findByNameContaining(name);

        if (usersList.isEmpty()) {
            throw new IllegalArgumentException("No searches found for " + name);
        }

        List<SearchResponse> searchResponseList = new ArrayList<>();

        for (Users user : usersList) {
            SearchResponse searchResponse = new SearchResponse(user.getName(), user.getId(), user.getProfilePictureUrl());
            searchResponseList.add(searchResponse);
        }

        return new SearchUserResponse(searchResponseList);
    }

    @Override
    public ResetPasswordResponse resetPassword(ResetPasswordRequest resetPasswordRequest) {

        if (resetPasswordRequest.getMobile() == null || resetPasswordRequest.getMobile().isEmpty()) {
            throw new IllegalArgumentException("Mobile Number can not be Null.");
        }

        if (resetPasswordRequest.getPassword() == null || resetPasswordRequest.getPassword().isEmpty()) {
            throw new IllegalArgumentException("Password can not be Null.");
        }

        if (resetPasswordRequest.getOtp() == null) {
            throw new IllegalArgumentException("Otp can not be Null.");
        }

        Otp otp = otpRepository.findByMobile(resetPasswordRequest.getMobile());

        if (otp == null) {
            throw new IllegalArgumentException("No Otp for given Mobile number exist in Database");
        }

        Users user = usersRepository.findByMobile(resetPasswordRequest.getMobile());

        if (user == null) {
            throw new IllegalArgumentException("User not Registered. Register first.");
        }

        if ((new Date()).compareTo(otp.getExpiryTime()) > 0) {
            throw new IllegalArgumentException("Otp expired. Please ask for new Otp.");
        }

        if (!otp.getOtp().equals(resetPasswordRequest.getOtp())) {
            throw new IllegalArgumentException("Given Otp is Incorrect");
        }

        user.setPassword(resetPasswordRequest.getPassword());
        usersRepository.save(user);

        return new ResetPasswordResponse("Password Updated Successfully");

    }

    @Override
    public LoginResponse login(LoginRequest loginRequest) {

        if (loginRequest.getMobile() == null || loginRequest.getMobile().isEmpty()) {
            throw new IllegalArgumentException("Mobile Number can not be Null.");
        }

        if (loginRequest.getPassword() == null || loginRequest.getPassword().isEmpty()) {
            throw new IllegalArgumentException("Password can not be Null.");
        }

        Users user = usersRepository.findByMobile(loginRequest.getMobile());

        if (user == null) {
            throw new IllegalArgumentException("User Not Registered");
        }

        String password = user.getPassword();

        if (!password.equals(loginRequest.getPassword())) {
            throw new IllegalArgumentException("Mobile Number or Password is incorrect.");
        }

        return new LoginResponse(user.getId());
    }

    @Override
    public Void follow(Long id, FollowRequest followRequest) {

        Users user = usersRepository.getById(id);
        Followers followers = followersRepository.getById(followRequest.getFolloweeId());
        Set<Users> s = new HashSet<>();
        s.add(user);
        followers.setUsers(s);
        followersRepository.save(followers);
        return null;
    }


}
