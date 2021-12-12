import './VideoCard.scss';

const VideoCard = ({video, videoClick}) => {

  const handClick = () => {
    let id = video.id;
    videoClick(id);
  }

  return (
      <div className="video-card" onClick={handClick}>
        <div className='video-card__image-container'><img className="video-card__image" src={video.image} alt={video.title}></img></div>
        <div className="video-card__info-container">
          <p className="video-card__title">{video.title}</p>
          <p className="video-card__channel">{video.channel}</p>
        </div>
      </div>
  );
};

export default VideoCard;