import './VideoList.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import VideoCard from '../VideoCard/VideoCard';
import { API, API_KEY } from '../../util/util';


const VideoList = ({videoData, videoPlaying}) => {
  const filterArray = videoData.filter((obj) => {
    return obj.id !== videoPlaying.id;
  })

  return (
    <section className="video-list">
      <p className="video-list__title">NEXT VIDEOS</p>
      {filterArray.map((obj) => {
        return <Link to={obj.id}key={obj.id} ><VideoCard video={obj} /></Link>
      })}
    </section>
  );
};

export default VideoList;






/*

      const filterArray = response.data.filter((obj) => {
        return obj.id !== this.state.videoPlaying.id;
      })

export default class VideoList extends Component {
  state = {
    currentVideo: [],
    videoData: this.props.videoData,
  };
/*
  componentDidMount() {
    axios.get(API + "/videos" + API_KEY)
    .then((response) => {
      console.log(this.state.currentVideo)
      const videoData = response.data;
      const filterArray = videoData.filter((obj) => {
        return obj.id !== this.state.currentVideo;
      })
      this.setState({
        videoData: filterArray
      })
    })
  }


  filterOutCurrentVideoArray = () => {
    const newArray = this.props.videosData.filter( (obj) => {
      return obj.id !== this.props.currentVideo.id;
    })
    return newArray
  }
  */
/*
  render() {
    return (
    <section className="video-list">
      <p className="video-list__title">NEXT VIDEOS</p>
      {this.state.videoData.map((obj) => {
        return <Link to={obj.id}key={obj.id} >
          <VideoCard 
          video={obj} />
        </Link>
      })}
      
    </section>
    );
  }
}

*/