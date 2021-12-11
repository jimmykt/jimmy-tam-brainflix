import React, { Component } from "react";
import "./Video.scss";

export default class Video extends Component {
  state = {
    videoPlaying: this.props.video,
  };

  setVideo = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className="video">
        <video className="video__player" poster={this.state.videoPlaying.image} controls></video>
      </div>
    );
  }
}
