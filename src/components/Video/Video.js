import React, { Component } from "react";
import "./Video.scss";

import VideosDetails from "../../data/video-details.json";
//import Videos from "../../data/videos.json";

import VideoDescription from "../VideoDescription/VideoDescription"
import CommentInput from "../CommentInput/CommentInput"

export default class Video extends Component {
  state = {
    VideoPlaying: VideosDetails[0],
  };



  setVideo = () => {
  }

  render() {

    return (
      <div>
        <video className="video" poster={this.state.VideoPlaying.image} controls></video>
        <VideoDescription video={this.state.VideoPlaying}/>
        <CommentInput video={this.state.VideoPlaying}/>
      </div>
    );
  }
}
