import React, { Children, Component } from "react";
import CreatePost from "../components/CreatePost";
import axios from "axios";
import { storage } from "../../../utils/helper";

class CreatePostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      flag: false,
      image: {},
      imageBool: false,
      textBool: true,
      imgSrc:"",
      isWriting: false,
      isloaderActive: false
    };
  }

  componentDidMount(){

  }
  
  onSubmitHandler = (event) => {
    let temp = this.state.data;
    let details = { userId: localStorage.getItem("uid"), ...temp };
    axios
      .post("http://localhost:8080/post", details)
      .then((response) => {
        console.log(response);
        if (response.data.code == 200) {
          this.setState({ flag: true , data:{},isWriting:false});
          alert("Posted");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChangeHandler = (event) => {
    let data = this.state.data;
    data[event.target.name] = event.target.value;
    if(data[event.target.name]!= ""){
      this.setState({isWriting:true})
    }else{
      this.setState({isWriting:false})
    }
    this.setState({ data});
    
    console.log(data);
  };

  handleChange = (event) => {
    console.log(event.target.files[0])
    let file = event.target.files[0];
    if (file) {
      this.setState({ image: file});
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);

      reader.onloadend = function (e) {
          this.setState({
              imgSrc: [reader.result]
          })
        }.bind(this);
          console.log(url)
        }
  };

  handleUpload = () => {
    this.setState({isloaderActive:true});
    console.log(this.stateimage)
    let image = this.state.image;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
        "state_changed",
        snapshot => {
        },
        error => {
            console.log(error);
        },
        () => {
            storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    let data = {
                        userId:localStorage.getItem("uid"),
                        imageUrl:url
                    }
                    axios.post(`http://localhost:8080/post`, data)
                    .then(response => {
                        if(response.data.code === 200){
                          this.setState({image:{}, imgSrc:""})
                          this.setState({isloaderActive:false});
                        }                         
                    })
                    .catch(error => {
                        console.log(error);
                    });
                });
        }
    );
  };

  textClick = () =>{
    this.setState({imageBool:false, textBool:true})
  }

  imageClick = () =>{
    this.setState({imageBool:true, textBool:false})
  }

  render() {
    const { data, flag, image, imageBool, textBool, imgSrc, isWriting, isloaderActive} = this.state;
    return (
      <CreatePost
        data={data}
        onSubmitHandler={this.onSubmitHandler}
        onChangeHandler={this.onChangeHandler}
        handleUpload={this.handleUpload}
        handleChange={this.handleChange}
        imageBool = {imageBool}
        textBool = {textBool}
        textClick ={this.textClick}
        imageClick = {this.imageClick}
        imgSrc = {imgSrc}
        isWriting = {isWriting}
        isloaderActive = {isloaderActive}
      />
    );
  }
}

export default CreatePostContainer;
