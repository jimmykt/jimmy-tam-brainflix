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
      <div className="video">
        <video className="video__player" poster={this.state.VideoPlaying.image} controls></video>
      </div>
    );
  }
}
