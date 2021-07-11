import React, { Component } from "react";
import Profile from "../components";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { storage } from "../../../utils/helper";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { name: "", dob: "", profilePictureUrl: "", portfolioUrl: "" },
      experienceDetails: { organisationName: "", startDate: "", endDate: "" },
      educationDetails: {
        degreeName: "",
        major: "",
        institutionName: "",
        marks: "",
        startDate: "",
        endDate: "",
      },
      errors: { name: false, dob: false },
      flag: false,
      imgSrc: "",
      image: "",
      isTyping: true,
      isSubmitting: false,
      portfolio: "",
      portfolioSrc: "",
      isPortfolioUploaded: false,
      isImageUploaded: false,
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/user/" + localStorage.getItem("uid") + "/profile"
      )
      .then((response) => {
        if (response.data.code == 200) {
          console.log(response);
          this.setState({
            data: {
              name: response.data.data.name,
              dob: response.data.data.dob,
            },
          });
        }

        if (response.data.data.profilePictureUrl !== null) {
          this.setState({ imgSrc: response.data.data.profilePictureUrl });
        }

        if (response.data.data.portfolioUrl !== null) {
          this.setState({ portfolioSrc: response.data.data.portfolioUrl });
        }

        if (response.data.data.portfolioUrl !== null) {
          this.setState({ portfolioSrc: response.data.data.portfolioUrl });
        }

        if (response.data.data.educationDetails !== null) {
          this.setState({
            educationDetails: response.data.data.educationDetails,
          });
        }

        if (response.data.data.experienceDetails !== null) {
          this.setState({
            experienceDetails: response.data.data.experienceDetails,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onExperienceChangeHandler = (event) => {
    let experienceDetails = this.state.experienceDetails;
    experienceDetails[event.target.name] = event.target.value;
    this.setState({ experienceDetails });
  };

  onEducationChangeHandler = (event) => {
    let educationDetails = this.state.educationDetails;
    educationDetails[event.target.name] = event.target.value;
    this.setState({ educationDetails });
  };

  onChangeHandler = (event) => {
    let data = this.state.data;
    data[event.target.name] = event.target.value;
    this.setState({ data });
  };

  onSubmitHandler = (event) => {
    let { data } = this.state;
    let { errors } = this.state;

    if (data["name"] === null) {
      errors["name"] = true;
    }

    if (data["dob"] === null) {
      errors["dob"] = true;
    }

    this.setState({ errors });

    if (data["mobile"] !== null && data["dob"] !== null) {
      event.preventDefault();
      this.setState({ isSubmitting: true });

      let details = {
        name: this.state.data.name,
        profilePictureUrl: this.state.imgSrc,
        dob: this.state.data.dob,
        portfolioUrl: this.state.portfolioSrc,
        experienceDetails: this.state.experienceDetails,
        educationDetails: this.state.educationDetails,
      };

      axios
        .post(
          "http://localhost:8080/user/" +
            localStorage.getItem("uid") +
            "/profile",
          details
        )
        .then((response) => {
          if (response.data.code === 200) {
            console.log(response + " response");
            this.setState({ flag: true, isSubmitting: false });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleChange = (event) => {
    console.log(event.target.files[0]);
    let image = event.target.files[0];
    this.setState({ isImageUploaded: true });

    let userId = localStorage.getItem("uid");
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    if (image !== "") {
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url + " Url");
              this.setState({ imgSrc: url, isImageUploaded: false });
            });
        }
      );
    }
  };

  uploadPortfolioChangeHandler = (event) => {
    console.log(event.target.files[0] + "portfolio");
    let portfolio = event.target.files[0];
    let userId = localStorage.getItem("uid");

    const uploadPortfolio = storage
      .ref(`portfolio/${portfolio.name}`)
      .put(portfolio);
    if (portfolio !== "") {
      uploadPortfolio.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("portfolio")
            .child(portfolio.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              console.log(url + " Url");
              this.setState({ portfolioSrc: url });
            });
        }
      );
    }
  };

  render() {
    const {
      data,
      experienceDetails,
      educationDetails,
      errors,
      flag,
      imgSrc,
      isSubmitting,
      portfolioSrc,
      isImageUploaded,
    } = this.state;

    if (flag) {
      return <Redirect to="/feeds" />;
    }
    return (
      <>
        <Profile
          detail={data}
          educationDetails={educationDetails}
          experienceDetails={experienceDetails}
          onSubmitHandler={this.onSubmitHandler}
          onChangeHandler={this.onChangeHandler}
          onEducationChangeHandler={this.onEducationChangeHandler}
          onExperienceChangeHandler={this.onExperienceChangeHandler}
          handleChange={this.handleChange}
          imgSrc={imgSrc}
          isSubmitting={isSubmitting}
          uploadPortfolioChangeHandler={this.uploadPortfolioChangeHandler}
          portfolioSrc={portfolioSrc}
          isImageUploaded={isImageUploaded}
          errors={errors}
        />
      </>
    );
  }
}

export default ProfileContainer;
