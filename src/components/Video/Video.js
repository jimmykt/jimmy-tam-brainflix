import React, { Component } from "react";
import "./Video.scss";

import VideosDetails from "../../data/video-details.json";
//import Videos from "../../data/videos.json";

import VideoDescription from "../VideoDescription/VideoDescription"

export default class Video extends Component {
  state = {
    VideoPlaying: VideosDetails[0],
  };

  testingfuntion = () => {
    //console.log("hello");
    //console.log(VideosDetails);
    //console.log(Videos);
    //console.log(this.state.VideoPlaying);
    //console.log(this.title);
  }

  setVideo = () => {
  }

  render() {
    this.testingfuntion()

    return (
      <div>
        <video className="video" poster={this.state.VideoPlaying.image} controls></video>
        <VideoDescription video={this.state.VideoPlaying}/>
      </div>
    );
  }
}
