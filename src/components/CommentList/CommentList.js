import "./CommentList.scss";
import Comment from '../Comment/Comment'

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









/*


import React, { Component } from "react";
import "./CommentList.scss";
import Comment from '../Comment/Comment'
export default class CommentList extends Component {
  state = {
    commentList: this.props.video.comments,
  };

  test = () => {
    console.log(this.state.commentList);
  }

  render() {
    // {this.test()}
    return (
      <div className="comment-list">

        {this.state.commentList.map((comment, i) => {
          return <Comment key={i} comment={comment} convertDate={this.props.convertDate}/>
        })}

      </div>
    );
  }
}


*/