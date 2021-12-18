import './CommentList.scss';
import Comment from '../Comment/Comment';

const CommentList = ({video}) => {
  console.log(video);
  const name = video;
  return (
  <section className="comment-list">
    


{/* 
    {video.comments.map((comment, i) => {
      return <Comment key={i} comment={comment}/>
    })}
 */}

  </section>

  );
};

export default CommentList;

