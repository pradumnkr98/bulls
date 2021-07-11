import React from "react";

const ViewProfile = ({ name, age, portfolioUrl, degreeName, institutionName, major, marks, EdstartDate, EdendDate, organisationName, ExstartDate, ExendDate}) => {
  return (
    <div>
        <div style = {{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <p style={{textTransform:"capitalize", marginLeft:"10px"}}><b>{name} , </b><span><b>{age} yrs</b></span></p>
        </div>
        <h5 style={{marginLeft:"10px", marginTop:"10px", color:"crimson"}}>Education</h5>
        <div className="card" style={{marginLeft:"0px", padding:"10px"}}>
           {institutionName && <p><b>{institutionName}</b></p>}
           {degreeName && major && marks && <p>{degreeName}, <span>{major}, </span> <span>{marks} GPA</span></p>}
           {EdstartDate && EdendDate && <p>{EdstartDate} - <span>{EdendDate}</span></p>}
            
        </div>
        <h5 style={{marginLeft:"10px", marginTop:"10px", color:"crimson"}}>Experience</h5>
        <div className="card" style={{marginLeft:"0px", padding:"10px"}}>
           {organisationName && <p><b>{organisationName}</b></p>}
           {ExstartDate && ExendDate && <p><span>{ExstartDate} - </span><span>{ExendDate}</span></p>}
        </div>
        {portfolioUrl && <a  className= "buttons" href={portfolioUrl} style={{padding:"10px", marginTop:"10px"}} target="_blank">View Portfolio</a>}
    </div>
  );
};

export default ViewProfile;
