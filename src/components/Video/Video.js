import './Video.scss';
import { API_KEY } from '../../util/util';

const Video = ({video}) => {
  return (
  <section className="video">
    <video className="video__player" poster={video.image} 
      src={video.video + API_KEY}
      controls>
    </video>
  </section>
  );
};

export default Video;
