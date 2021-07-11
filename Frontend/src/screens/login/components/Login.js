import React, { Component } from "react";
import { TextBox, Buttons } from "../../../shared/components";
import "../../.././assets/index.css";
import { NavLink } from "react-router-dom";

const Login = ({ state, onSubmitHandler, onChangeHandler, isTyping, errors}) => {
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"space-between"
        }}
      >
        <img className="illustrator" src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-2517534-2107801.png"></img>
        <div
          className=" border cards needs-validation shadow"
          style={{ padding: "30px", width: "40%", borderRadius: "28px", marginRight:"80px"}}
          noValidate
        >
          <div class="col" style={{ marginBottom: "20px" }}>
            <h2>
              <b>Login</b>
            </h2>
          </div>
          <div className="row">
            <div class="col mt-3">
              <TextBox
                inputType="text"
                placeholder="Enter Mobile"
                label="Mobile Number"
                id="mobile"
                name="mobile"
                value={state.mobile}
                onChange={onChangeHandler}
              />
            </div>"
            {errors.mobile &&<span style={{color:"red"}} visibility={errors.mobile?"visible":"hidden"}>Mobile Number can not be Null.</span>}
          </div>

          <div className="row ">
            <div class="col mt-3">
              <TextBox
                inputType="password"
                placeholder="Enter Password"
                label="Password"
                id="password"
                name="password"
                value={state.password}
                onChange={onChangeHandler}
              />
            </div>
            {errors.password &&<span style={{color:"red"}} visibility={errors.password?"visible":"hidden"}>Password can not be Null.</span>}
          </div>

          <div className="row ">
            <div class="col mt-3" style={{ marginLeft: "318px" }}>
              <a className="anchor" href="/forgotpassword">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="row">
            <div class="col mt-1">
              <Buttons onSubmitHandler ={onSubmitHandler} value="Sign In" style={{width:"187px"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
