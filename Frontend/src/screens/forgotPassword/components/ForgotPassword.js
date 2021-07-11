import React from "react";
import { Buttons, TextBox } from "../../../shared/components";
import "../../.././assets/index.css";

const ForgotPassword = ({
  state,
  onSubmitHandler,
  onOtpSubmitHandler,
  onChangeHandler,
  isOtpSended,
  errors,
}) => {
  return (
    <div>
      <div>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <img
            className="illustrator"
            src="https://cdni.iconscout.com/illustration/premium/thumb/concept-of-reset-lost-password-in-mobile-1886567-1598238.png"
          ></img>
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="border cards shadow"
              style={{ padding: "30px", width: "77%", borderRadius: "28px" }}
            >
              <div class="col" style={{ marginBottom: "40px" }}>
                <h3>
                  <b>Forgot Password</b>
                </h3>
              </div>
              <div className="row">
                <div class="col">
                  <TextBox
                    inputType="text"
                    placeholder="Enter Mobile Number"
                    label="Mobile Number"
                    id="mobileNo"
                    name="mobile"
                    value={state.mobile}
                    onChange={onChangeHandler}
                    required="true"
                  />
                </div>
                {errors.mobile && (
                  <span style={{ color: "red" }}>Mobile can not be Null.</span>
                )}
              </div>

              <div className="row ">
                <div class="col mt-3">
                  <button
                    type="submit"
                    class="buttons2"
                    onClick ={onOtpSubmitHandler}
                    style={{ width: "187px" }}
                  >
                    {" "}
                    Send OTP{" "}
                  </button>
                </div>
              </div>
            </div>

            {isOtpSended && (
              <div
                className="border cards shadow"
                style={{
                  padding: "30px",
                  width: "77%",
                  borderRadius: "28px",
                  marginTop: "10px",
                }}
              >
                <div className="row">
                  <div class="col">
                    <TextBox
                      inputType="text"
                      placeholder="Enter OTP"
                      label="OTP"
                      name="otp"
                      value={state.otp}
                      onChange={onChangeHandler}
                      required="true"
                    />
                  </div>
                  {errors.otp && (
                    <span style={{ color: "red" }}>OTP can not be Null.</span>
                  )}
                </div>

                <div className="row ">
                  <div class="col  mt-3">
                    <TextBox
                      inputType="password"
                      placeholder="Enter Password"
                      label="Password"
                      id="password"
                      name="password"
                      value={state.password}
                      onChange={onChangeHandler}
                      required="true"
                    />
                  </div>
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      Password can not be Null.
                    </span>
                  )}
                </div>

                <div className="row">
                  <div class="col mt-3">
                    <TextBox
                      inputType="password"
                      placeholder="Enter Password"
                      label="Confirm Password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={state.confirmPassword}
                      onChange={onChangeHandler}
                      required="true"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <span style={{ color: "red" }}>
                      confirmPassword can not be Null.
                    </span>
                  )}
                </div>

                <div className="row">
                  <div class="col mt-3">
                    <Buttons
                      onSubmitHandler ={onSubmitHandler}
                      value="Change Password"
                      style={{ width: "187px" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
