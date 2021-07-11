import { SearchResult, SearchBar } from "../components";
import React, { Component } from "react";
import axios from "axios";

class SearchResultContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isFollowed: {},
      name: "",
      error: "",
      userDetails: {
        name: "",
        dob: "",
        profilePictureUrl: "",
        experienceDetails: { organisationName: "", startDate: "", endDate: "" },
        educationDetails: {
          degreeName: "",
          major: "",
          institutionName: "",
          marks: "",
          startDate: "",
          endDate: "",
        },
      },
    };
  }

  onChangeHandler = (event) => {
    let name = this.state.name;
    name = event.target.value;
    this.setState({ name: name });
    console.log(name);
  };

  onSubmitHandler = (event) => {
    axios
      .get("http://localhost:8080/user?name=" + this.state.name)
      .then((response) => {
        if (response.data.code == 200) {
          this.setState({ data: response.data.data.usersList });
        } else {
          this.setState({ data: [], error: response.data.msg });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onFollowHandler = (userId) => {
    let detail = { followeeId: userId };
    let { isFollowed } = this.state;
    axios
      .post(
        `http://localhost:8080/user/${localStorage.getItem("uid")}/following`,
        detail
      )
      .then((responce) => {
        if (responce.data.code == 200) {
          isFollowed[userId] = true;
          console.log(responce);
          this.setState(isFollowed);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onViewProfileClickHandler = (userId) => {
    axios
      .get(`http://localhost:8080/user/${userId}/profile`)
      .then((responce) => {
        if (responce.data.code === 200) {
          this.setState({ userDetails: responce.data.data });
          console.log(responce.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getAge(dateString) 
  {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
  }

  render() {
    const { data, isFollowed, name, error, userDetails } = this.state;
    return (
      <div className="feedMain">
        <SearchBar
          name={name}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        <div style={{ marginTop: "50px" }}></div>
        {data.length !== 0 ? (
          <SearchResult
            data={data}
            onfollowHandler={this.onFollowHandler}
            isFollowed={isFollowed}
            userDetails={userDetails}
            age = {this.getAge(userDetails.dob)}
            onViewProfileClickHandler={this.onViewProfileClickHandler}
          />
        ) : (
          <div>
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SearchResultContainer;
