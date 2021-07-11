import React from "react";
import { Route, Redirect } from "react-router-dom";
import {Header} from "../../shared/components";

const PrivateRoute = ({component: Component, ...rest}) =>{
    return (
        <Route {...rest} render = {(props) => localStorage.getItem("isAuth")?(
                <div>
                    <Header authenticated={true}/>
                    <div style={{marginTop:"40px !important" , backgroundColor:"#f3f2ef"}}>
                        <Component {...props}/>
                    </div>
                </div>
            ):(
                <Redirect to = {"/"}/>)
            }/>
    );
}

export default PrivateRoute;