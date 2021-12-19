import './VideoList.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

import VideoCard from '../VideoCard/VideoCard';
import { API, API_KEY } from '../../util/util';




/*
const VideoList = (props) => {
  let data = [];
  
  if(props.currentVideo) {
    console.log(props.currentVideo);
  }

  axios.get(API + "/videos" + API_KEY)
  .then((response) => {
    data = response.data.filter((obj) => 
      obj.id !== props.currentVideo
    )
  })


  return (
  <section className="video-list">
    <p className="video-list__title">NEXT VIDEOS</p>
    {console.log(data)}
    {data.map( (obj) => {
      return <VideoCard 
      key={obj.id} 
      video={obj} />
    })}
    
  </section>
  );
};

export default VideoList;


*/



  /*
  const filterOutCurrentVideoArray = () => {
    const newArray = props.videosData.filter( (obj) => {
      return obj.id !== props.currentVideo.id;
    })
    return newArray
  }
  */






import React, { Component } from 'react';



export default class VideoList extends Component {
  state = {
    currentVideo: this.props.currentVideo,
    videoData: []
  };

  componentDidMount() {
    axios.get(API + "/videos" + API_KEY)
    .then((response) => {
      this.setState({
        videoData: response.data
      })

      const filterArray = this.state.videoData.filter((obj) =>{
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
