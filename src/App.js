import React, { Component } from 'react';
import './App.scss';
import './styles/partials/_global.scss';

import VideosData from "./data/videos.json";
import VideosDetailsData from "./data/video-details.json";

import Navigation from './components/Navigation/Navigation';
import Video from './components/Video/Video';
import VideoDescription from './components/VideoDescription/VideoDescription';
import CommentInput from './components/CommentInput/CommentInput';
import CommentList from './components/CommentList/CommentList';
import VideoList from './components/VideoList/VideoList'

export default class App extends Component {
  state = {
    videosData: VideosData,
    videosDetailsData: VideosDetailsData,
    videoPlaying: VideosDetailsData[0],
  }

  convertDate = (timestamp) => {
    let date = new Date(timestamp);
    const convertedDate = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).format(date);
    return convertedDate;
  }

  videoClick = (id) => {
    let setId = id;
    const setObj = this.state.videosDetailsData.find(obj => obj.id === setId);
    this.setState({videoPlaying: setObj});
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Video video={this.state.videoPlaying}/>
        <div className='App__container'>
          <div className='App__container-left'>
            <VideoDescription 
              video={this.state.videoPlaying} 
              convertDate={this.convertDate}/>  
          <CommentInput video={this.state.videoPlaying}/>
          <CommentList 
            video={this.state.videoPlaying} 
            convertDate={this.convertDate}/>
          </div>
          <div className='App__container-right'>
            <VideoList 
              videosData={this.state.videosData} 
              currentVideo={this.state.videoPlaying}
              videoClick={this.videoClick}/>
          </div>
        </div>
      </div>
    );
  }
}

