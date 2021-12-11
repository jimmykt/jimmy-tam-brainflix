import "./CommentInput.scss";


import React, { Component } from "react";

export default class CommentInput extends Component {
  state = {
    commentsLength: 0,
  };

  render() {
    //this.setCommentsLength();

    return (
      <div>
        <p>{this.props.video.comments.length} Comments</p>
      </div>
    );
  }
}


