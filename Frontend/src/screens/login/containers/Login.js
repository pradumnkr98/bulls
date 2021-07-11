import React, { Component } from "react";
import Login from "../components";
import axios from "axios";
import { Redirect } from "react-router-dom";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {mobile:"", password:""},
      errors:{mobile:false, password:false},
      loggedIn:false,
      flag:false,
      error:"",
      isTyping:false
    };
  }

  onChangeHandler = (event) => {
    let data  = this.state.data;
    data[event.target.name] = event.target.value;
    if(data[event.target.name] !== ""){
      this.setState({isTyping:true})
    }else{
      this.setState({isTyping:false})
    }
    this.setState(data);
  };

  onSubmitHandler = (event) => {

    debugger
    let {data} = this.state;
    if(data.mobile === ""){
      let{errors} = this.state;
      errors["mobile"] = true;
      this.setState(errors)
    }

    if(data.password == ""){
      let{errors} = this.state;
      errors["password"] = true;
      this.setState(errors);
    }

    if(data.mobile !=="" && data.password !==""){
      event.preventDefault();
      axios.post('http://localhost:8080/user/login', data)
      .then(response =>{
          if(response.data.code == 200){
            localStorage.setItem("isAuth",true);
            console.log(response);
            localStorage.setItem("uid",response.data.data.userId);
            this.setState({loggedIn:true});
          }else{
            this.setState({error:response.data.msg})
          }
      })
      .catch(error => {
          console.log(error);
      });
   }
  };


  render() {
    const { data, loggedIn, isTyping, errors} = this.state;

    if(loggedIn){
      return (
        <Redirect to="/feeds"/>
      );
    }
    return (
      <>
        <div style={{display:"flex", justifyContent:"flex-end", marginTop:"77px", color:"red", marginBottom:"-57px", marginRight:"296px"}}>
          <div><b>{this.state.error}</b></div>
        </div>
        <Login
          state={data}
          onSubmitHandler={this.onSubmitHandler}
          onChangeHandler={this.onChangeHandler}
          isTyping = {isTyping}
          errors = {errors}
        />
      </>
    );
  }
}

export default LoginContainer;
