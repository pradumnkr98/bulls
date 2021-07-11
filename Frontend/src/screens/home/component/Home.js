import React from "react";
import "../../.././assets/index.css";

const Home = () =>{

    return (
        <div>
            <div className="homeContent">
                <div className = "description" style={{marginLeft:"140px"}}>
                    <p>Welcome to your, <span style = {{color:"#32CD32", fontSize:"60px"}}><br/>Stocks </span>and 
                        <span style = {{color:"#DC143C",fontSize:"60px"}}> Crypto</span> <br/>Market Community</p>
                </div>
                <div>
                    <img className="illustrator" style={{height:"520px", marginRight:"78px"}} src="https://cdni.iconscout.com/illustration/premium/thumb/couple-learning-how-to-make-more-profits-from-the-stocks-market-2935913-2459012.png"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;