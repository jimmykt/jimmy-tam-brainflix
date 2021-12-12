import './Video.scss';

const Video = ({video}) => {
  return (
  <div className="video">
    <video className="video__player" poster={video.image} controls></video>
  </div>
  );
};

export default Video;
