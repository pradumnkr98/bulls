package in.ongrid.Perdun.controller;

import in.ongrid.Perdun.model.dto.*;
import in.ongrid.Perdun.service.GetOtpImpl;
import in.ongrid.Perdun.service.UserService;
import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    GetOtpImpl getOtpImpl;


    @GetMapping("/{id}/profile")
    public BaseResponse<UserProfileResponse> getUserDetails(@PathVariable("id") Long id){

        return new BaseResponse<>(HttpStatus.SC_OK,"Success", userService.getUserDetails(id));
    }

    @GetMapping("")
    public BaseResponse<SearchUserResponse> searchUsers(@RequestParam("name") String name){

        return new BaseResponse<>(HttpStatus.SC_OK,"Users found", userService.getUsersByName(name));
    }

    @PostMapping("")
    public BaseResponse<RegisteredUserResponse> registerUser(@RequestBody RegisterUserRequest registerUserRequest){

        return new BaseResponse<>(HttpStatus.SC_OK,"Registered Successfully",
                userService.registerUser(registerUserRequest));
    }

    @PostMapping("/{id}/profile")
    public BaseResponse<UpdateUserProfileResponse> updateUserDetails(@PathVariable("id") Long id,
                                                                     @RequestBody UserProfileRequest userProfileRequest){

        return new BaseResponse<>(HttpStatus.SC_OK,"Success", userService.updateUserProfile(id,userProfileRequest));
    }

    @PostMapping("/forgot-password")
    public BaseResponse<ResetPasswordResponse> resetPassword(@RequestBody ResetPasswordRequest request){

        return new BaseResponse<>(userService.resetPassword(request));
    }

    @PostMapping("/generateotp")
    public BaseResponse<OtpResponse> generateOtp(@RequestBody OtpRequest otpRequest){

        return new BaseResponse<>(getOtpImpl.generateOtp(otpRequest));
    }

    @PostMapping("/login")
    public BaseResponse<LoginResponse> login(@RequestBody LoginRequest loginRequest){

        return new BaseResponse<>(HttpStatus.SC_OK,"Login Successful", userService.login(loginRequest));
    }

    @PostMapping("/{id}/following")
    public BaseResponse<Void> follow(@PathVariable("id") Long id, @RequestBody FollowRequest followRequest){
        return new BaseResponse<>(HttpStatus.SC_OK, "Success", userService.follow(id, followRequest));
    }

}
