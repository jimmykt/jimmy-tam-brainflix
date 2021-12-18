import './Video.scss';

const Video = ({video}) => {
  //console.log(video);
  //console.log(video.video);
  return (
  <section className="video">
    <video className="video__player" poster={video.image} controls>
      <iframe src={video.video} title="video"></iframe>
    </video>
  </section>
  );
};

export default Video;
