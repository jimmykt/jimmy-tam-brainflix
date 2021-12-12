import React, { Component } from "react";
import "./CommentList.scss";
import Comment from '../Comment/Comment'
export default class CommentList extends Component {
  state = {
    commentList: this.props.video.comments,
  };


  render() {
    return (
      <div className="comment-list">

        {this.state.commentList.map((comment, i) => {
          return <Comment key={i} comment={comment} convertDate={this.props.convertDate}/>
        })}

      </div>
    );
  }
}


