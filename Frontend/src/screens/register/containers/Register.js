import React, { Component } from "react";
import Register from "../components";
import axios from "axios"
import { Redirect } from "react-router-dom";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {otp:"", mobile:"", password:""},
      errors:{otp:false, mobile:false, password:false},
      loggedIn: false,
      isOtpSended:false,
      flag:false,
      error:"",
      isOtpTyping:false,
      isTyping:true
    };
  }

  onChangehandler = (event) => {
    let { data } = this.state;
    data[event.target.name] = event.target.value;
    
    if(data[event.target.name] != ""){
      this.setState({isOtpTyping:true})
    }else{
      this.setState({isOtpTyping:false})
    }

    if(data["otp"] != ""){
      this.setState({isTyping:true})
    }else{
      this.setState({isTyping:false})
    }

    this.setState(data);
  };

  onSubmithandler = (event) => {

    let {data} = this.state;
    let {errors} = this.state;

    if(data["otp"] === ""){
      errors["otp"] = true;
    }

    if(data["mobile"] === ""){
      errors["mobile"] = true;
    }

    if(data["password"] === ""){
      errors["password"] = true;
    }

    this.setState({errors})
    if(data["otp"] !== "" && data["mobile"] !== "" && data["password"] !== ""){

      event.preventDefault();
      axios.post('http://localhost:8080/user', this.state.data)
      .then(response =>{
          if(response.data.code === 200){
              console.log(response);
              localStorage.setItem("isAuth",true); 
              localStorage.setItem("uid",response.data.data.id)
              this.setState({loggedIn:true});
          }else{
            this.setState({error:response.data.msg});
          }
      })
      .catch(error => {
          console.log(error);
      });
    }
  };

  onOtpSubmitHandler = (event) => {

    let {errors, data} = this.state;

    if(data["mobile"] === ""){
      errors["mobile"] = true;
    }

    this.setState({errors});

    if(data["mobile"] !== null){

    event.preventDefault();
      axios.post('http://localhost:8080/user/generateotp', this.state.data)
      .then(response =>{
          this.setState({isOtpSended:true})
          console.log(response);
      })
      .catch(error => {
          console.log(error);
      });
    }
  } 

  render() {
    const  {data, errors, loggedIn, isOtpSended,flag, isOtpTyping, isTyping}  = this.state;

    return (
      loggedIn? <Redirect to="/profile"/>:
      <>
        <div style={{display:"flex", justifyContent:"flex-end", marginTop:"30px", color:"red", marginBottom:"20px", marginRight:"312px"}}>
                <div><b>{this.state.error}</b></div>
        </div>
        <Register
          state={data}
          onChangehandler={this.onChangehandler}
          onSubmithandler={this.onSubmithandler}
          onOtpSubmitHandler = {this.onOtpSubmitHandler}
          isOtpSended = {isOtpSended}
          isOtpTyping= {isOtpTyping}
          isTyping = {isTyping}
          errors = {errors}
        />
      </>
    );
  }
}
export default RegisterContainer;
