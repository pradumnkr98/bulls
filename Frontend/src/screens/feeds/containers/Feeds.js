import React, { Component } from "react";
import Feeds from "../components/Feeds";
import axios from "axios";

class FeedsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      posts: [],
      comments:[],
      commentSelect:"",
      liked:{},
      addComment:{comment:""},
      istyping:false,
      error:""
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/post/'+localStorage.getItem("uid"))
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data.data.postsList});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // componentDidUpdate(){
  //   axios
  //     .get('http://localhost:8080/post/'+localStorage.getItem("uid"))
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ posts: response.data.data.postsList});
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  onCommentClickHandle = (postId, id) => {  
    console.log( `${postId} ${id}`);
    this.setState({ commentSelect: this.state.commentSelect === id ?"":id});
  }

  onLikeClickHandle = (postId, itemIndex) => {
    const detail = { userId: localStorage.getItem("uid") };
    let {liked} = this.state;
    axios
      .post("http://localhost:8080/post/" + postId + "/like", detail)
      .then((response) => {
        if(response.data.code === 200){
          liked[postId] = true;
          let {posts} = this.state;
          posts[itemIndex].likes = posts[itemIndex].likes+1;
          this.setState({posts});
          this.setState(liked)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  onCommentChangeHandler = (event) => {
    let data = this.state.addComment;
    data[event.target.name] = event.target.value;
    if(data[event.target.name] != ""){
      this.setState({istyping:true});
    }else{
      this.setState({istyping:false});
    }
    this.setState({data});
    console.log(data);
  }

  onCommentSubmitHandler = (postId) =>{
    let details = {userId:localStorage.getItem("uid"),comment:this.state.data.comment}
    axios.post('http://localhost:8080/post/'+postId+'/comments', details)
    .then(response =>{
        console.log(response);
        if(response.data.code == 200){
          this.setState({addComment:{comment : ""}, istyping:false});
        }
    })
    .catch(error =>{
        console.log(error);
    })
  }

  onLoadCommentHandle = (postId) =>{
    axios.get(`http://localhost:8080/post/${postId}/comments`)
    .then(response =>{
      console.log(response);
      if(response.data.code == 200){
        this.setState({comments:response.data.data})
      }
    })
    .catch(error =>{
      console.log(error);
    })
  }

  getDate (date1, date2) {
    let oned = 24 * 60 * 60 * 1000;
    return Math.ceil((date2 - date1) / oned);
  }

  render() {
    const { data, posts, comments, commentSelect, liked, flag, addComment, istyping} = this.state;
    console.log(comments);
    return (
      
      posts.length ? posts.map((post, itemIndex) => <Feeds
          itemIndex={itemIndex}
          commentSelect={commentSelect}
          liked={liked}
          post={post}
          onLikeClickHandle={this.onLikeClickHandle}
          onCommentClickHandle={this.onCommentClickHandle}
          onCommentChangeHandler = {this.onCommentChangeHandler}
          onCommentSubmitHandler = {this.onCommentSubmitHandler}
          addComment ={addComment}
          flag={flag}
          comments={comments}
          onLoadCommentHandle={this.onLoadCommentHandle}
          istyping = {istyping}

        />):<div style={{color:"#6a6a6a"}}>To View Posts You have to follow People first</div>
    );
  }
}

export default FeedsContainer;
