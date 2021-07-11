import React, { Component } from "react";
import { Buttons, TextBox } from "../../../shared/components";
import "../../.././assets/index.css";

const Register = ({
  state,
  onSubmithandler,
  onOtpSubmitHandler,
  onChangehandler,
  isOtpSended,
  isOtpTyping,
  isTyping,
  errors
}) => {
  return (
    <div>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          className="illustrator"
          src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-2517534-2107801.png"
        ></img>
        <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            className="border cards shadow"
            style={{ padding: "30px", width: "77%", borderRadius: "28px" }}
          >
            <div class="col" style={{ marginBottom: "40px" }}>
              <h2>
                <b>Register</b>
              </h2>
            </div>
            <div className="row justify-content-center">
              <div class="col">
                <TextBox
                  inputType="text"
                  placeholder="Enter Mobile"
                  label="Mobile Number"
                  id="mobileNo"
                  name="mobile"
                  value={state.mobile}
                  onChange={onChangehandler}
                  required="required"
                />
              </div>
              {errors.mobile && (
                  <span style={{ color: "red" }}>Mobile can not be Null.</span>
                )}
            </div>

            <div className="row justify-content-center">
              <div class="col mt-3">
                <button onClick={onOtpSubmitHandler} type="submit" class="buttons2" style={{width:"187px"}}>
                  {" "}
                  Send OTP{" "}
                </button>
              </div>
            </div>
          </div>

         {isOtpSended && <div
            className="border cards shadow"
            style={{
              padding: "30px",
              width: "77%",
              borderRadius: "28px",
              marginTop: "20px",
            }}
          >
            <div className="row justify-content-center">
              <div class="col mt-3">
                <TextBox
                  inputType="text"
                  placeholder="Enter OTP"
                  label="OTP"
                  id="otp"
                  name="otp"
                  value={state.otp}
                  onChange={onChangehandler}
                  required="true"
                />
              </div>
              {errors.otp && (
                  <span style={{ color: "red" }}>OTP can not be Null.</span>
                )}
            </div>

            <div className="row justify-content-center">
              <div class="col mt-3">
                <TextBox
                  inputType="password"
                  placeholder="Enter Password"
                  label="Password"
                  id="password"
                  name="password"
                  value={state.password}
                  onChange={onChangehandler}
                  required="true"
                />
              </div>
              {errors.password && (
                  <span style={{ color: "red" }}>Password can not be Null.</span>
                )}
            </div>

            <div className="row justify-content-center">
              <div class="col mt-3">
                <Buttons onSubmitHandler ={onSubmithandler} value="Sign Up" style={{width:"187px"}}/>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Register;
