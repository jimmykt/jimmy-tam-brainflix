import React, { Component } from "react";
import "./VideoDescription.scss";

import ViewsSVG from "../../assets/images/Icons/views.svg";
import likesSVG from "../../assets/images/Icons/likes.svg";


export default class VideoDescription extends Component {
  state = {
    videoPlaying: this.props.video,
  };


 
  render() {
  //  {console.log(this.state.videoPlaying.timestamp)}
    return (
    <div className="VideoDetails">
      <h1 className="VideoDetails__title">{this.state.videoPlaying.title}</h1>
      <div className="VideoDetails__info-container">
        <div className="VideoDetails__left-container">
          <p className="VideoDetails__channel">By {this.state.videoPlaying.channel}</p>
          <p className="VideoDetails__date">{this.props.convertDate(this.state.videoPlaying.timestamp)}</p>
        </div>
        <div className="VideoDetails__right-container">
          <p className="VideoDetails__views">          
          <img className="test" src={ViewsSVG} alt="views"></img>  {this.state.videoPlaying.views}
          </p>
          <p className="VideoDetails__likes">
          <img className="test" src={likesSVG} alt="likes"></img> {this.state.videoPlaying.likes}</p>
        </div>
      </div>
      <p className="VideoDetails__description">{this.state.videoPlaying.description}</p>
    </div>
    );
  }
}
