import './Comment.scss';
import { convertDate } from '../../util/util';

const Comment = (props) => {
  const comment = props.comment;
  return (
      <article className="comment">
        <div className="avatarDefault"></div>
        <div className="comment__container">
          <div className="comment__info-container">
            <p className="comment__name">{comment.name}</p>
            <p className="comment__date">{convertDate(comment.timestamp)}</p>
          </div>
          <p className="comment__comment">{comment.comment}</p>
        </div>
      </article>
  );
};

export default Comment;