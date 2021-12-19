import './CommentList.scss';
import Comment from '../Comment/Comment';

const CommentList = (props) => {
  let commentsAray = [];
  if(props.video.comments) {
    commentsAray = props.video.comments;
  }
  //console.log(commentsAray);
  
  return (
  <section className="comment-list">
    {commentsAray.map((comment) => 
      <Comment key={comment.id} comment={comment}/>
    )}

    {/* 
     {comments ? 
     comments.map((comment) => 
      <Comment key={comment.id} comment={comment}/>) 
      : "Loading"}
       */}
  </section>
  );
};

export default CommentList;

