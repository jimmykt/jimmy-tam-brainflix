import './VideoCard.scss';

const VideoCard = ({video}) => {

  return (
      <div className="video-card">
        <img className="video-card__image" src={video.image} alt={video.title}></img>
        <div className="video-card__info-container">
          <p className="video-card__title">{video.title}</p>
          <p className="video-card__channel">{video.channel}</p>
        </div>
        
      </div>
  );
};

export default VideoCard;