import React, { Component } from "react";
import "./VideoDescription.scss";
import ViewsSVG from "../../assets/images/Icons/views.svg";
import likesSVG from "../../assets/images/Icons/likes.svg";


export default class VideoDescription extends Component {
  state = {
    VideoPlaying: this.props.videos[0],
  };

  convertDate = () => {
    let date = new Date(this.state.VideoPlaying.timestamp);
    const convertedDate = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).format(date);
    console.log(this.props.videos[0]);

    return convertedDate;
  }
 
  render() {
   
    return (
      
    <div className="VideoDetails">
      <h1 className="VideoDetails__title">{this.state.VideoPlaying.title}</h1>
      <div className="VideoDetails__info-container">
        <div className="VideoDetails__left-container">
          <p className="VideoDetails__channel">By {this.state.VideoPlaying.channel}</p>
          <p className="VideoDetails__date">{this.convertDate()}</p>
        </div>
        <div className="VideoDetails__right-container">
          <p className="VideoDetails__views">          
          <img className="test" src={ViewsSVG} alt="views"></img>  {this.state.VideoPlaying.views}
          </p>
          <p className="VideoDetails__likes">
          <img className="test" src={likesSVG} alt="likes"></img> {this.state.VideoPlaying.likes}</p>
        </div>
      </div>
    <p className="VideoDetails__description">{this.state.VideoPlaying.description}</p>
  </div>
    );
  }
}
