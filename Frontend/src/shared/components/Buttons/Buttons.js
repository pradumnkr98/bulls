import React from "react";
import "../../.././assets/index.css"

const Button = ({value, style, onSubmitHandler, className = "buttons2"}) => {

  
    return (
      <div >
        <button type="submit" className={className} onClick ={onSubmitHandler} style={style}>{value}</button>
      </div>
    );
}

export default Button;