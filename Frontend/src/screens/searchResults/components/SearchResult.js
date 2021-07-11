import React from "react";
import ViewProfile from "./ViewProfile";

const SearchResult = ({
  data,
  onfollowHandler,
  isFollowed,
  age,
  onViewProfileClickHandler,
  userDetails
}) => {
  {
    console.log(isFollowed);
  }
  let resultList = data.filter(item => item.id != localStorage.getItem("uid")).map((item, itemIndex) => (
    <>
       <div className="col-3">
        <div
          className="card search-result-card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            borderRadius: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="search-profile-picture rounded-circle"
              src={
                item.profilePictureUrl !== ""
                  ? item.profilePictureUrl
                  : "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
              }
            ></img>
            <div
              className="card-title"
              onClick={(value) => onViewProfileClickHandler(item.id)}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <p
                style={{
                  textTransform: "capitalize",
                  fontSize: "20px",
                  marginTop: "10px",
                }}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <b>{item.name}</b>
              </p>
            </div>
          </div>
          <button
            className={isFollowed[item.id] ? "btn" : "buttons2"}
            style={{ width: "140px" }}
            onClick={() => onfollowHandler(item.id, itemIndex)}
          >
            {isFollowed[item.id] ? "Followed" : "Follow"}
          </button>
        </div>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" style={{marginLeft:"13px", color:"crimson"}} id="staticBackdropLabel">
               <b> About</b>
              </h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ViewProfile name= {userDetails.name} age ={age} 
              portfolioUrl = {userDetails.portfolioUrl}
              institutionName={userDetails.educationDetails !==null && userDetails.educationDetails.institutionName}
              degreeName = {userDetails.educationDetails !== null && userDetails.educationDetails.degreeName} 
              major = {userDetails.educationDetails !==null && userDetails.educationDetails.major} 
              marks = {userDetails.educationDetails !==null && userDetails.educationDetails.marks} 
              EdstartDate = {userDetails.educationDetails !==null && userDetails.educationDetails.startDate} 
              EdendDate = {userDetails.educationDetails !==null && userDetails.educationDetails.endDate}
              organisationName = {userDetails.experienceDetails !==null && userDetails.experienceDetails.organisationName}
              ExstartDate = {userDetails.experienceDetails !==null && userDetails.experienceDetails.startDate} 
              ExendDate = {userDetails.experienceDetails !==null && userDetails.experienceDetails.endDate}></ViewProfile>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="buttons2"
                style={{width:"100px"}}
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ));
  return (
    <div className="container ">
      <div className="row">{resultList}</div>
    </div>
  );
};

export default SearchResult;
