import React from "react";
import {TextBox } from "../../.././shared/components";
import "../../.././assets/index.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import CommentLayout from "./Comment";
import {profileImageUrl} from "../../.././utils/constants"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Feeds = ({
  itemIndex,
  commentSelect,
  liked,
  post,
  onLikeClickHandle,
  onCommentClickHandle,
  onCommentChangeHandler,
  onCommentSubmitHandler,
  addComment,
  onLoadCommentHandle,
  comments,
  istyping,
}) => {
  return (
    <div
      id={itemIndex}
      className="postDetails card shadow"
      style={{
        background: "white",
        borderRadius: "20px"
      }}
    >
      <div>
        <div style={{display:"flex", flexDirection:"row"}}>
          {console.log(post.profilePictureUrl)}
          <img src={post.profilePictureUrl !=="" ?post.profilePictureUrl:profileImageUrl} className="profileImage rounded-circle"></img>
          <p
            id="postedBy"
            style={{
              color: "rgba(0,0,0,0.75)",
              textTransform: "capitalize",
              marginLeft: "15px",
              marginTop: "10px"
            }}
          >
            <b>{post.userName}</b>
          </p>
        </div>

        <div
          className="postDetails-content"
          style={{ borderRadius: "0px", marginTop:"10px"}}
        >
          {post.text != null && (
            <div className="postText">
              <p
                style={{ textTransform: "capitalize", fontWeight: "10px" }}
                id="text"
              >
                {post.text}
              </p>
            </div>
          )}

          {post.imageUrl != null && (
            <img className="postImage" src={post.imageUrl}></img>
          )}
        </div>
        <div style={{marginLeft:"6px", fontSize:"12px", marginBottom:"-10px", display:"flex", flexDirection:"row"}}>
          <ThumbUpAltIcon style={{color:"crimson", fontSize:"18px"}}></ThumbUpAltIcon>
          <p style={{marginLeft:"3px"}}>{post.likes}</p>
        </div>
        <hr/>
        <div className="postDetails-button">
          {/* <div>
                        <Buttons value="Like"/>
                    </div>
                    <div style={{marginLeft:"10px"}}>
                        <Buttons value="Comment"/>
                    </div> */}
          <div className="align-row post-action-background" onClick={(value) => onLikeClickHandle(post.postId, itemIndex)}>
            <ThumbUpAltOutlinedIcon
              id={itemIndex}
              className="likeButton"
              style={{ marginLeft: "0px", fontSize: "30px", color: liked[post.postId]?"crimson":"#6a6a6a"}}
            ></ThumbUpAltOutlinedIcon>
            <p className="post-action" style={{color: liked[post.postId]?"crimson":"#6a6a6a"}}>Like</p>
          </div>
                      
          <div className="align-row post-action-background" onClick={(value) => onCommentClickHandle(post.postId, itemIndex)}>
            <ModeCommentOutlinedIcon
              id={itemIndex}
              className="likeButton"
              style={{ fontSize: "30px", marginTop: "4px", color:"#6a6a6a" }}
            ></ModeCommentOutlinedIcon>
            <p className="post-action">Comment</p>
          </div>
        </div>
        <div>
          {commentSelect === itemIndex && (
            <div className="comment">
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>
                    <TextBox
                      style={{ borderRadius: "30px", width:"595px"}}
                      placeholder="Type Your Comment"
                      name="comment"
                      value={addComment.comment}
                      onChange={onCommentChangeHandler}
                    />
                  </div>
                  {istyping && <div>
                    <button
                      type="submit"
                      style={{
                        fontSize: "15px",
                        marginLeft: "8px",
                        marginTop: "5px",
                        height: "35px",
                        width: "77px",
                        borderRadius: "28px",
                        
                      }}
                      className={istyping?"buttons2":"buttons"}
                      disabled = {istyping?false:true}
                      onClick={(value) => onCommentSubmitHandler(post.postId)}
                    >
                      Add
                    </button>
                  </div>}
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          style={{ marginTop: "8px", marginBottom: "-27px", marginLeft: "5px" }}
        >
          <button
            onClick={() => onLoadCommentHandle(post.postId)}
            type="button"
            class="buttons"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{borderRadius: "15px"}}
          >
            Load Comments
          </button>
          <div class="modal-dialog modal-dialog-scrollable">
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
                    <h5 class="modal-title" id="staticBackdropLabel">
                      Comments
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {comments.map((item) => (
                      <CommentLayout
                        comment={item.comment}
                        commentBy={item.commentBy}
                        created = {item.created}
                        profilePictureUrl = {item.profilePictureUrl}
                      />
                    ))}
                  </div>
                  {/* <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
