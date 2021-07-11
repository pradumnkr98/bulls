import React from "react";
import {
  Buttons,
  TextBox,
  UploadButton,
  TextArea,
  MyLoaders
} from "../../../shared/components";
import "../../.././assets/index.css";
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';


const CreatePost = ({
  data,
  onSubmitHandler,
  onChangeHandler,
  handleUpload,
  handleChange,
  imageBool,
  textBool,
  textClick,
  imageClick,
  imgSrc,
  isWriting,
  isloaderActive
}) => {
  return (
    <div
      className="createPost card shadow"
      style={{ marginTop: "50px", borderRadius: "20px" }}
    >
      <nav class="nav" style={{ marginTop: "3px" }}>
        <div
          className="align-row post-action-background create-post-action shadow"
          onClick={textClick}
          style={{ border: textBool ? "1px solid grey" : "" }}
        >
          <CreateIcon className="rounded-circle" style={{ width: "28px", height: "28px", color:"rgba(231,163,62,1)"}} ></CreateIcon>
          <a className="nav-link" aria-current="page" href="#">
            Text
          </a>
        </div>

        <div
          className="align-row post-action-background create-post-action shadow"
          style={{ marginLeft: "10px" }}
          onClick={imageClick}
          style={{
            marginLeft: "15px",
            border: imageBool ? "1px solid grey" : "",
          }}
        >
          <ImageIcon style={{ width: "28px", height: "28px", color:"rgba(112,181,248,1)"}}></ImageIcon>
          <a class="nav-link" href="#">
            Image
          </a>
        </div>
      </nav>
      <hr></hr>
      {textBool && (
        <form onSubmit={onSubmitHandler}>
          <div className="createPost-text" id="defaultOpen">
            <TextArea
              placeholder="Start Writing Post..."
              style={{ height: "100px" ,borderRadius:"18px", marginBottom:"15px"}}
              name="text"
              value={data.text}
              onChange={onChangeHandler}
            />
          </div>
          {isWriting && <div className="createPost-buttons">
            <Buttons type="submit" value="Done" style= {{borderRadius: "23px", width:"130px"}}/>
          </div>}
        </form>
      )}

      {imageBool && (
          <>
            {imgSrc != "" && <img className = "postImage" src={imgSrc}></img>}
              <div className="createPost-buttons">
                  <UploadButton
                    onChange={handleChange}
                    style={{ color: "crimson" }}
                  /> 
                 {isloaderActive &&<div class="spinner-border" role="status">
                    <span ></span>
                  </div>}
                 {!isloaderActive && imgSrc && <Buttons
                    style = {{borderRadius: "24px", width:"130px"}}
                    onSubmitHandler={handleUpload}
                    type="submit"
                    value="Done"
                  />}
              
              </div>
          </>    
      )}
    </div>
  );
};

export default CreatePost;
