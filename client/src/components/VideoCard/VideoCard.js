import './VideoCard.scss';

const VideoCard = ({video}) => {
  return (
      <article className="video-card" >
        <div className='video-card__image-container'>
          <img className="video-card__image" src={video.image} alt={video.title}></img>
        </div>
        <div className="video-card__info-container">
          <h3 className="video-card__title">{video.title}</h3>
          <p className="video-card__channel">{video.channel}</p>
        </div>
      </article>
  );
};

export default VideoCard;