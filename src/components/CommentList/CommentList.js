import './CommentList.scss';
import Comment from '../Comment/Comment';

const CommentList = (props) => {
  let commentsAray = [];
  if(props.video.comments) {
    commentsAray = props.video.comments;
  }
  
  return (
  <section className="comment-list">
    {commentsAray.map((comment) => 
      <Comment key={comment.id} comment={comment}/>
    )}
  </section>
  );
};

export default CommentList;

