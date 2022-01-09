import './VideoDescription.scss';
import { convertDate } from '../../util/util';
import ViewsSVG from '../../assets/images/Icons/views.svg';
import likesSVG from '../../assets/images/Icons/likes.svg';

const VideoDescription = ({video}) => {

  return (
  <section className="video-details">
    <h1 className="video-details__title">{video.title}</h1>
    <div className="video-details__info-container">
      <div className="video-details__left-container">
        <p className="video-details__channel">By {video.channel}</p>
        <p className="video-details__date">{convertDate(video.timestamp)}</p>
      </div>
      <div className="video-details__right-container">
        <p className="video-details__views">          
        <img className="video-details__svg" src={ViewsSVG} alt="views"></img>  {video.views}
        </p>
        <p className="video-details__likes">
        <img src={likesSVG} alt="likes"></img> {video.likes}</p>
      </div>
    </div>
    <p className="video-details__description">{video.description}</p>
  </section>
  );
};

export default VideoDescription;








