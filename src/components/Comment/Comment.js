import './Comment.scss';
import { convertDate } from '../../util/util';

const Comment = ({ comment }) => {
  return (
      <article className="comment">
        <div className="avatarDefault"></div>
        <div className="comment__container">
          <div className="comment__info-container">
            <p className="comment__name">{comment.name}</p>
            <p className="comment__date">{convertDate(123)}</p>
          </div>
          <p className="comment__comment">{comment.comment}</p>
        </div>
      </article>
  );
};

export default Comment;