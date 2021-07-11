import React from "react";

const CommentLayout = ({comment, commentBy, created, profilePictureUrl}) =>{

    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <img className="rounded-circle" style={{width:"4rem", height:"4rem", marginTop:"8px"}} src={profilePictureUrl !==""?profilePictureUrl:"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}></img>
            <div class="card" style={{width: "24rem", marginBottom:"5px", borderRadius:"25px", padding:"10px", marginLeft:"6px"}}>
                <div class="card-body" style={{padding:"5px"}}>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <h5 class="card-title" style={{color:"crimson", textTransform:"capitalize"}}>{commentBy}</h5>
                    <span>{created}</span>
                    </div>
                    <p class="card-text" style={{fontWeight:"100px", fontSize:"15px"}}>{comment}</p>
                </div>
            </div>
        </div>
    );
}

export default CommentLayout;