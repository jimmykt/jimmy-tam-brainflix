import './HomePage.scss';
import { Component } from 'react';
import axios from 'axios';


import Video from '../../components/Video/Video'
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import CommentInput from '../../components/CommentInput/CommentInput';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';




const API_KEY = "/?api_key=4354755b-7920-4743-83e9-cb45372f1579";
const API = "https://project-2-api.herokuapp.com"

class HomePage extends Component {
  state = {
    videosData: [],
    videoPlaying: {},
  }

  componentWillMount() {
    axios.get(API + "/videos/84e96018-4022-434e-80bf-000ce4cd12b8" + API_KEY)
    .then((response) => {
      this.setState({
        videoPlaying: response.data
      })
    })
  }

  render() {
    return (
      <main className="main">
        <Video video={this.state.videoPlaying}/> 
        
        <div className="main__container">
          <section className="main__container-left">
            <VideoDescription video={this.state.videoPlaying} /> 
            
            <CommentInput video={this.state.videoPlaying}/>
            
            <CommentList video={this.state.videoPlaying} />
             
          </section>
          <aside className="main__container-right">
            <VideoList 
              videosData={this.state.videosData} 
              currentVideo={this.state.videoPlaying}/>  
          </aside>  
          
        </div>
        
      </main>
    )
  }
}

export default HomePage;