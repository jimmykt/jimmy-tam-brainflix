import React, { Component } from "react";
import "./Video.scss";

export default class Video extends Component {
  state = {
    VideoPlaying: this.props.videos[0],
  };

  setVideo = () => {
    console.log(this.props.videos[0])
  }

  render() {
    return (
      <div>
        <video className="video" poster={this.state.VideoPlaying.image} controls></video>
      </div>
    );
  }
}
