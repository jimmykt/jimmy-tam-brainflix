import './HomePage.scss';
import { Component } from 'react';
import axios from 'axios';
import Video from '../../components/Video/Video'
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import CommentInput from '../../components/CommentInput/CommentInput';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';
import { API, API_KEY } from '../../util/util';

class HomePage extends Component {
  state = {
    videoData: [],
    videoPlaying: {},
  }

  componentDidMount() {
    console.log(this.props.match)
    // set main video to urlID when refresh page happens
    axios.get(API + "/videos" + API_KEY)
    .then((response) => {
      this.setState({
        videoData: response.data
      })

      if (this.props.match.url === "/" ) {
        axios.get(API + "/videos/" + this.state.videoData[0].id + API_KEY)
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
    console.log("match:  " + this.props.match.params.id);
    console.log("prev:  " + prevProps.match.params.id);

    if(this.props.match.params.id !== prevProps.match.params.id) {
      if (this.props.match.url === "/" ) {
        axios.get(API + "/videos/" + this.state.videoData[0].id + API_KEY)
        .then((response) => {
          this.setState({
            videoPlaying: response.data,
          })
        })
      }
      else {
        axios.get(API + "/videos/" + id + API_KEY)
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