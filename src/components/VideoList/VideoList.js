import React, { Component } from "react";
import "./VideoList.scss";

import VideoCard from "../VideoCard/VideoCard";

export default class VideoList extends Component {
  state = {
    upNext: this.props.videosData,
  };


  filterOutCurrentVideoArray = () => {
    const newArray = this.props.videosData.filter( (obj) => {
      return obj.id !== this.props.currentVideo.id;
    })
    return newArray
  }
  

  render() {
    return (
    <div className="next-videos">
      <p className="next-videos__title">NEXT VIDEOS</p>
      {this.filterOutCurrentVideoArray().map( (obj) => {
        return <VideoCard key={obj.id} video={obj}/>
      })}
    </div>
    );
  }
}
