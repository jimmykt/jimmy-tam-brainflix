import './Video.scss';

const Video = ({video}) => {
  console.log(video);
  //console.log(video.video);
  return (
  <section className="video">
    <video className="video__player" poster={video.image} 
      src={video.video + "/?api_key=4354755b-7920-4743-83e9-cb45372f1579"}
      controls>
    </video>
  </section>
  );
};

export default Video;
