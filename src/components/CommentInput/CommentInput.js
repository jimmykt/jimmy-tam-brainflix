import './CommentInput.scss';
import ButtonSVG from '../../assets/images/Icons/add_comment.svg';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

const CommentInput = (props) => {
  return (
  <section className="comments-input">
    <h3 className="comments-input__length">3 Comments</h3>
    <div className="comments-input__container">
      <div className="comments-input__avatar"><Avatar/></div>
      <form className="comments-input__form">
        <label className="comments-input__label" htmlFor="comments">JOIN THE CONVERSATION</label>
        <textarea className="comments-input__input" name="comments" id="comments" placeholder="Add a new comment"></textarea>
        <div className="comments-input__button"><Button icon={ButtonSVG} text="COMMENT"/></div>
      </form>
    </div>
  </section>
  );
};

export default CommentInput;









