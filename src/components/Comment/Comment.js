import './Comment.scss';

const Comment = ({ comment, i, convertDate }) => {
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