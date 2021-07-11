import CreatePostContainer from "./CreatePost";
import FeedsContainer from "./Feeds";

import React, { Component } from "react";

class FeedMainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:{}
    };
  }

  render() {
    return (
      <div className="feedMain">
          <CreatePostContainer />
          <hr/>
          <FeedsContainer />
          <br></br>
      </div>
    );
  }
}

export default FeedMainContainer;
