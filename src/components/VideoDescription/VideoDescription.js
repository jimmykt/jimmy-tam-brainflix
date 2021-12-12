import React, { Component } from "react";
import "./VideoDescription.scss";

import ViewsSVG from "../../assets/images/Icons/views.svg";
import likesSVG from "../../assets/images/Icons/likes.svg";


export default class VideoDescription extends Component {
  state = {
    videoPlaying: this.props.video,
  };


 
  render() {
    return (
    <div className="video-details">
      <h1 className="video-details__title">{this.state.videoPlaying.title}</h1>
      <div className="video-details__info-container">
        <div className="video-details__left-container">
          <p className="video-details__channel">By {this.state.videoPlaying.channel}</p>
          <p className="video-details__date">{this.props.convertDate(this.state.videoPlaying.timestamp)}</p>
        </div>
        <div className="video-details__right-container">
          <p className="video-details__views">          
          <img className="video-details__svg" src={ViewsSVG} alt="views"></img>  {this.state.videoPlaying.views}
          </p>
          <p className="video-details__likes">
          <img className="test" src={likesSVG} alt="likes"></img> {this.state.videoPlaying.likes}</p>
        </div>
      </div>
      <p className="video-details__description">{this.state.videoPlaying.description}</p>
    </div>
    );
  }
}
