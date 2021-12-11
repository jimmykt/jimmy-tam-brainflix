import './Comment.scss';

const Comment = ({ comment, i, convertDate }) => {
  const test = () => {
    console.log(i);
    console.log(convertDate);

  }
  // test()
  return (
      <div className="comment">
        <div className="avatarDefault"></div>
        <div className="comment__container">
          <div className="comment__info-container">
            <p className="comment__name">{comment.name}</p>
            <p className="comment__date">{convertDate(comment.timestamp)}</p>
          </div>
          <p className="comment__comment">{comment.comment}</p>
        </div>
      </div>
      
  );
};

export default Comment;