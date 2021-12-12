import './CommentList.scss';
import Comment from '../Comment/Comment';

const CommentList = ({video, convertDate}) => {
  return (
  <div className="comment-list">
    {video.comments.map((comment, i) => {
      return <Comment key={i} comment={comment} convertDate={convertDate}/>
    })}
  </div>
  );
};

export default CommentList;