import './HomePage.scss';
import { Component } from 'react';
import axios from 'axios';
import Video from '../../components/Video/Video'
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import CommentInput from '../../components/CommentInput/CommentInput';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';

class HomePage extends Component {
  state = {
    videoData: [],
    videoPlaying: {},
  }

  componentDidMount() {
    axios
    .get(process.env.REACT_APP_API_URL + "/videos")
    .then((response) => {
      this.setState({
        videoData: response.data
      })
      if (this.props.match.url === "/" ) {
        axios
        .get(process.env.REACT_APP_API_URL + "/videos/" + this.state.videoData[0].id)
        .then((response) => {
          this.setState({
            videoPlaying: response.data,
          })
        })
      }

      // keeps same video when you refresh
      else {
        axios
        .get(process.env.REACT_APP_API_URL + "/videos/" + this.props.match.params.id)
        .then((response) => {
          this.setState({
            videoPlaying: response.data,
          })
        })
      }
    })
  }

  // update state change
  componentDidUpdate(prevProps) {
    let id = this.props.match.params.id;
    
    if(this.props.match.params.id !== prevProps.match.params.id) {
      if (this.props.match.url === "/" ) {
        axios
        .get(process.env.REACT_APP_API_URL + "/videos/" + this.state.videoData[0].id)
        .then((response) => {
          this.setState({
            videoPlaying: response.data,
          })
        })
      }

      else {
        axios
        .get(process.env.REACT_APP_API_URL + "/videos/" + id)
        .then((response) => {
          this.setState({
            videoPlaying: response.data,
          })
        })
      }
    }
  }

  render() {
    return (
      <main className="main">
        <Video video={this.state.videoPlaying} /> 
        <div className="main__container">
          <section className="main__container-left">
            <VideoDescription video={this.state.videoPlaying} /> 
            <CommentInput video={this.state.videoPlaying} />
            <CommentList video={this.state.videoPlaying} />
          </section>
          <aside className="main__container-right">
            <VideoList 
              videoData={this.state.videoData}
              videoPlaying={this.state.videoPlaying} /> 
          </aside>  
        </div>
      </main>
    )
  }
}

export default HomePage;