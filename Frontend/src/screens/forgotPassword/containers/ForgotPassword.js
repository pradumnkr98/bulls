import React, { Component } from "react";
import ForgotPassword from "../components";
import axios from "axios";
import { Redirect } from "react-router-dom";

class ForgotPasswordContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {mobile:"", otp:"", password:"", confirmPassword:""},
      errors: {mobile:false, otp:false, password:false, confirmPassword:false},
      flag: false,
      isOtpSended:false,
      error: ""
    };
  }

  onSubmitHandler = (event) => {
    
    let{errors} = this.state;
    let {data} = this.state;
    if(data.mobile === ""){
      errors["mobile"] = true;
    }

    if(data["otp"] === ""){
      errors["otp"] = true;
    }

    if(data["password"] === ""){
      errors["password"] = true;
    }

    if(data["confirmPassword"] === ""){
      errors["confirmPassword"] = true;
    }
    this.setState({errors});

    if(data.mobile !== "" && data.otp !== "" && data.password !=="" && data.confirmPassword !==""){
      event.preventDefault();
      if (
        this.state.data.password.localeCompare(
          this.state.data.confirmPassword
        ) === 0
      ) {
        axios
          .post("http://localhost:8080/user/forgot-password", this.state.data)
          .then((response) => {
            if (response.data.code === 200) {
              this.setState({ flag: true });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.setState({ error: "Password and Confirm Password must be same!" });
      }
    }
  };

  onOtpSubmitHandler = (event) => {
    let{errors} = this.state;
    let {data} = this.state;
    
    if(data.mobile === ""){
      errors["mobile"] = true;
    }
    this.setState({errors});

    if(data.mobile !== ""){
      event.preventDefault();
      axios
        .post('http://localhost:8080/user/generateotp', this.state.data)
        .then((response) => {
          this.setState({isOtpSended:true})
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  onChangeHandler = (event) => {
    let { data } = this.state;
    data[event.target.name] = event.target.value;
    console.log(data[event.target.name]);
    this.setState(data);
  };

  render() {
    const { data, flag, error, isOtpSended , errors} = this.state;

    if (flag) {
      return <Redirect to="/login" />;
    }
    return (
        <>
            <div style={{display:"flex", justifyContent:"flex-end", marginTop:"30px", color:"red", marginBottom:"20px", marginRight:"274px"}}>
                <div><b>{this.state.error}</b></div>
            </div>
            <ForgotPassword
                state={data}
                onSubmitHandler={this.onSubmitHandler}
                onOtpSubmitHandler={this.onOtpSubmitHandler}
                onChangeHandler={this.onChangeHandler}
                isOtpSended = {isOtpSended}
                errors = {errors}
            /> 
        </>
    );
  }
}

export default ForgotPasswordContainer;
