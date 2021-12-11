import React, { Component } from "react";
import "./CommentInput.scss";

import ButtonSVG from "../../assets/images/Icons/add_comment.svg";

import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

export default class CommentInput extends Component {
  state = {
    commentsLength: this.props.video.comments.length,
  };
  
  setVideo = () => {
    console.log(this.state)
  }
  render() {
    return (
      <div className="comments-input">
        <p className="comments-input__length">{this.state.commentsLength} Comments</p>
        <div className="comments-input__container">
          <div className="comments-input__avatar"><Avatar/></div>
          <form className="comments-input__form">
            <label className="comments-input__label" htmlFor="comments">JOIN THE CONVERSATION</label>
            <textarea className="comments-input__input" name="comments" id="comments" placeholder="Add a new comment" rows="4"></textarea>
            <Button className="comments-input__button" icon={ButtonSVG} text="COMMENT"/>
          </form>
        </div>
      </div>
    );
  }
}


