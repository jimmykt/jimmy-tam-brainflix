import './Video.scss';

const Video = ({video}) => {
  return (
  <section className="video">
    <video className="video__player" poster={video.image} 
      // src={video.video + API_KEY}
      src={video.video}
      controls>
    </video>
  </section>
  );
};

export default Video;
