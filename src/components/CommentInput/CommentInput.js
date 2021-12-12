import './CommentInput.scss';

import ButtonSVG from '../../assets/images/Icons/add_comment.svg';

import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

const CommentInput = ({video}) => {
  return (
  <div className="comments-input">
    <p className="comments-input__length">{video.comments.length} Comments</p>
    <div className="comments-input__container">
      <div className="comments-input__avatar"><Avatar/></div>
      <form className="comments-input__form">
        <label className="comments-input__label" htmlFor="comments">JOIN THE CONVERSATION</label>
        <textarea className="comments-input__input" name="comments" id="comments" placeholder="Add a new comment"></textarea>
        <div className="comments-input__button"><Button icon={ButtonSVG} text="COMMENT"/></div>
      </form>
    </div>
  </div>
  );
};

export default CommentInput;









