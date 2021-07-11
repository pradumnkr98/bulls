import React from "react";
import {
  TextBox,
  Buttons,
  UploadButton,
  DatePicker,
} from "../../../shared/components";
import LoadingOverlay from 'react-loading-overlay-ts'

const Profile = ({
  detail,
  educationDetails,
  experienceDetails,
  onSubmitHandler,
  onChangeHandler,
  onEducationChangeHandler,
  onExperienceChangeHandler,
  handleChange,
  imgSrc,
  isSubmitting,
  uploadPortfolioChangeHandler,
  portfolioSrc,
  isImageUploaded,
  errors
}) => {
  return (
    <div className="container">
      <div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "60px", marginLeft:"10px", marginBottom:"20px"}}
        >
          <LoadingOverlay
            active={isImageUploaded}
            spinner
            className= "uploadImage"
          >
            <img
              className="uploadImage rounded-circle"
              src={imgSrc !== ""?imgSrc:"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}
            />
            </LoadingOverlay>
            <UploadButton
              onChange={handleChange}
              style={{ marginTop: "130px" }}
            ></UploadButton>
          
        </div>
       

        <div className="row" style={{ marginLeft: "5px" }}>
          <div className="col-10 mt-3">
            <h4 style={{ borderColor: "crimson", color: "crimson" }}>
              Profile
            </h4>
          </div>
        </div>

        <div
          className="border cards"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div class="col" style={{ marginRight: "10px" }}>
            <TextBox
              inputType="text"
              placeholder="Enter Your Name"
              label="Name"
              id="name"
              name="name"
              value={detail.name}
              onChange={onChangeHandler}
              required={true}
            />
            {errors.name &&<span style={{color:"red"}} visibility={errors.mobile?"visible":"hidden"}>Name can not be Null.</span>}
          </div>
          <div class="col" style={{ marginLeft: "10px" }}>
            <DatePicker
              inputType="date"
              id="dob"
              placeholder="dd/mm/yyyy"
              label="Date Of Birth"
              name="dob"
              value={detail.dob}
              onChange={onChangeHandler}
              required={true}
            />
            {errors.dob &&<span style={{color:"red"}} visibility={errors.mobile?"visible":"hidden"}>Date of Birth can not be Null.</span>}
          </div>
        </div>
        <br />

        <div className="row " style={{ marginLeft: "5px" }}>
          <div className="col mt-3">
            <h4 style={{ borderColor: "crimson", color: "crimson" }}>
              Education Details
            </h4>
          </div>
        </div>

        <div
          className="border cards"
          style={{
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div class="col" style={{ marginRight: "10px" }}>
              <TextBox
                inputType="text"
                placeholder="Enter Your Degree Name"
                label="Degree Name"
                id="degreeName"
                name="degreeName"
                value={educationDetails.degreeName}
                onChange={onEducationChangeHandler}
              />
            </div>
            <div class="col" style={{ marginLeft: "10px" }}>
              <TextBox
                inputType="text"
                placeholder="Enter Your Major"
                label="Major"
                id="major"
                name="major"
                value={educationDetails.major}
                onChange={onEducationChangeHandler}
              />
            </div>
          </div>

          <div className="row ">
            <div class="col mt-3">
              <TextBox
                inputType="text"
                placeholder="Enter Your Institution Name"
                label="Institution Name"
                id="institutionName"
                name="institutionName"
                value={educationDetails.institutionName}
                onChange={onEducationChangeHandler}
              />
            </div>
            <div class="col mt-3">
              <TextBox
                inputType="number"
                placeholder="Enter Your GPA/Percentage"
                label="Marks in GPA"
                id="marks"
                name="marks"
                value={educationDetails.marks}
                onChange={onEducationChangeHandler}
              />
            </div>
          </div>

          <div className="row ">
            <div class="col mt-3">
              <DatePicker
                inputType="date"
                id="startDate"
                placeholder="dd/mm/yyyy"
                label="Start Date"
                name="startDate"
                value={educationDetails.startDate}
                onChange={onEducationChangeHandler}
              />
            </div>
            <div class="col mt-3">
              <DatePicker
                inputType="date"
                id="endDate"
                placeholder="dd/mm/yyyy"
                label="End Date"
                name="endDate"
                value={educationDetails.endDate}
                onChange={onEducationChangeHandler}
              />
            </div>
          </div>
        </div>

        <br />
        <div className="row " style={{ marginLeft: "5px" }}>
          <div className="col mt-3">
            <h4 style={{ borderColor: "crimson", color: "crimson" }}>
              Experience Details
            </h4>
          </div>
        </div>

        <div
          className="border cards"
          style={{
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div class="col-6">
              <TextBox
                inputType="text"
                placeholder="Enter Your Organisation Name"
                label="Organisation Name"
                id="organisationName"
                name="organisationName"
                value={experienceDetails.organisationName}
                onChange={onExperienceChangeHandler}
              />
            </div>
          </div>

          <div className="row">
            <div class="col mt-3">
              <DatePicker
                inputType="date"
                id="startDate"
                placeholder="dd/mm/yyyy"
                label="Start Date"
                name="startDate"
                value={experienceDetails.startDate}
                onChange={onExperienceChangeHandler}
              />
            </div>
            <div class="col mt-3">
              <DatePicker
                inputType="date"
                id="endDate"
                placeholder="dd/mm/yyyy"
                label="End Date"
                name="endDate"
                value={experienceDetails.endDate}
                onChange={onExperienceChangeHandler}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "50px",
            marginBottom: "20px",
            marginLeft:"20px"
          }}
        >

          <div class="mb-3" style ={{width:"40%"}}>
            <label for="formFile" class="form-label" style={{color:"crimson"}}>Upload Portfolio</label>
              <input class="form-control" type="file" id="formFile" onChange = {uploadPortfolioChangeHandler}></input>
          </div>
          {portfolioSrc && <a  className= "buttons" href={portfolioSrc} style={{padding:"10px", marginTop:"34px", marginLeft:"10px"}} target="_blank">View Portfolio</a>}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >


          {isSubmitting &&<div class="spinner-border" role="status" style={{ marginLeft: "5px", marginBottom: "50px"}}>
                    <span ></span>
                  </div>}

          {!isSubmitting && <div col-6 mt-3 style={{ marginLeft: "5px", marginBottom: "50px"}}>
            <Buttons style={{ fontSize: "20px", width:"400px"}} value="Submit" onSubmitHandler = {onSubmitHandler}/>
          </div>}
          {/* <div style={{ marginLeft: "15px" }}>
            <Buttons value="Update" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Profile;
