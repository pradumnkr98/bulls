import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {ForgotPassword, Register, Home, Profile, FeedMain, Login, SearchResult} from "../screens";
import PrivateRoute from "../layout/private";
import PublicRoute from "../layout/public";


const Navigation = () =>{

    return (
        <BrowserRouter>
          <Switch>
            <PublicRoute exact path = "/" component = {Home}/>
            <PublicRoute exact path = "/register" component = {Register}/>
            <PublicRoute exact path = "/forgotpassword" component = {ForgotPassword} />
            <PublicRoute exact path = "/login" component  = {Login}/>
            <PrivateRoute exact path = "/profile" component = {Profile}/>
            <PrivateRoute exact path = "/feeds" component = {FeedMain}/>
            <PrivateRoute exact path = "/searchUser" component ={SearchResult}/>
          </Switch>
        </BrowserRouter>
      );
}

export default Navigation;