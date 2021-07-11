import React from "react";
import { Route, Redirect } from "react-router-dom";
import {Header} from "../../shared/components";

const PublicRoute = ({component: Component, ...rest}) =>{

    if(localStorage.getItem("isAuth"))
        return (<Redirect to = "/feeds"/>);
    return (
        <Route {...rest} render = {(props)=>(
                <div>
                    <Header/>
                    <div style={{marginTop:"30px"}}>
                        <Component {...props}/>
                    </div>
                </div>
            )}/>
    );
}

export default PublicRoute;