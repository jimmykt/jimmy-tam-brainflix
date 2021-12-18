import './HomePage.scss';
import { Component } from 'react';

import Video from '../../components/Video/Video'
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import CommentInput from '../../components/CommentInput/CommentInput';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';


//delete later
import VideoData from '../../data/videos.json';
import VideosDetailsData from '../../data/video-details.json';



class HomePage extends Component {
  state = {
    videosData: VideoData,
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
      <main className="main">
        <Video video={this.state.videoPlaying}/>
        <div className="main__container">
          <section lassName="main__container-left">
            <VideoDescription 
              video={this.state.videoPlaying} 
              convertDate={this.convertDate}/> 
            <CommentInput video={this.state.videoPlaying}/>
            <CommentList 
              video={this.state.videoPlaying} 
              convertDate={this.convertDate}/>
          </section>
          <aside className="main__container-right">
            <VideoList 
              videosData={this.state.videosData} 
              currentVideo={this.state.videoPlaying}
              videoClick={this.videoClick}/>
          </aside>
        </div>
      </main>
    )
  }
}

export default HomePage;


{/* 
        <Video video={this.state.videoPlaying}/>
        <main className='App__container'>
          <section className='App__container-left'>
            <VideoDescription 
              video={this.state.videoPlaying} 
              convertDate={this.convertDate}/>  
          <CommentInput video={this.state.videoPlaying}/>
          <CommentList 
            video={this.state.videoPlaying} 
            convertDate={this.convertDate}/>
          </section>
          <aside className='App__container-right'>
            <VideoList 
              videosData={this.state.videosData} 
              currentVideo={this.state.videoPlaying}
              videoClick={this.videoClick}/>
          </aside>
        </main>
         */}