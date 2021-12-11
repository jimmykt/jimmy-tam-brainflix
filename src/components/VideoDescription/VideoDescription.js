import "./VideoDescription.scss";

import ViewsSVG from "../../assets/images/Icons/views.svg";
import likesSVG from "../../assets/images/Icons/likes.svg";



const VideoDescription = (props) => {
  let videoPlaying = props.video;

  const convertDate = () => {
    let date = new Date(videoPlaying.timestamp);
    const convertedDate = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).format(date);
    return convertedDate;
  }

  return (
  <div className="VideoDetails">
    <h1 className="VideoDetails__title">{videoPlaying.title}</h1>
    <div className="VideoDetails__info-container">
      <div className="VideoDetails__left-container">
        <p className="VideoDetails__channel">By {videoPlaying.channel}</p>
        <p className="VideoDetails__date">{convertDate()}</p>
      </div>
      <div className="VideoDetails__right-container">
        <p className="VideoDetails__views">          
          <img className="test" src={ViewsSVG} alt="views"></img>  {videoPlaying.views}
        </p>
        <p className="VideoDetails__likes">
        <img className="test" src={likesSVG} alt="likes"></img> {videoPlaying.likes}</p>
      </div>
    </div>
    <p className="VideoDetails__description">{videoPlaying.description}</p>
  </div>
  )
}

export default VideoDescription;
