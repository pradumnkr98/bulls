package in.ongrid.Perdun.service;

import in.ongrid.Perdun.model.dto.*;

public interface UserService {

    RegisteredUserResponse registerUser(RegisterUserRequest registerUserRequest);

    UserProfileResponse getUserDetails(Long id);

    UpdateUserProfileResponse updateUserProfile(Long id, UserProfileRequest userProfile);

    SearchUserResponse getUsersByName(String name);

    ResetPasswordResponse resetPassword(ResetPasswordRequest resetPasswordRequest);

    LoginResponse login(LoginRequest loginRequest);

    Void follow(Long id, FollowRequest followRequest);

}
