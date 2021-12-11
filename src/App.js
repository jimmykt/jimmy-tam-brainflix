import React, { Component } from 'react';
import './App.scss';
import './styles/partials/_global.scss';

import VideosData from "./data/videos.json";
import VideosDetailsData from "./data/video-details.json";

import Navigation from './components/Navigation/Navigation';
import Video from './components/Video/Video';
import VideoDescription from './components/VideoDescription/VideoDescription';
import CommentInput from './components/CommentInput/CommentInput';

export default class App extends Component {
  state = {
    VideosData: VideosData,
    VideosDetailsData: VideosDetailsData,
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Video videos={this.state.VideosData}/>
        <VideoDescription videos={this.state.VideosDetailsData}/>
        <CommentInput videos={this.state.VideosDetailsData}/>

      </div>
    );
  }
}

