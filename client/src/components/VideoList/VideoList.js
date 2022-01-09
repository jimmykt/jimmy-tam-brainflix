import './VideoList.scss';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard/VideoCard';

const VideoList = ({videoData, videoPlaying}) => {
  const filterArray = videoData.filter((obj) => {
    return obj.id !== videoPlaying.id;
  })

  return (
    <section className="video-list">
      <p className="video-list__title">NEXT VIDEOS</p>
      {filterArray.map((obj) => {
        return <Link className='link' to={"/video/" + obj.id}key={obj.id} ><VideoCard video={obj} /></Link>
      })}
    </section>
  );
};

export default VideoList;
