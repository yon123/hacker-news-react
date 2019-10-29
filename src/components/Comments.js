import React from "react";
import { getComments, getAllComments } from "./api";
import { Link } from "react-router-dom";
import queryString from "query-string";
import CommentsList from "./CommentsList";
import { formatDate } from "./Helpers";

class Comments extends React.Component {
  state = {
    userComment: null,
    comments: []
  };
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    // console.log(id);
    getComments(id)
      .then(userComment => {
        this.setState({
          userComment
        });
        return getAllComments(userComment.kids.slice(0, 30));
      })
      .then(comments => {
        this.setState({
          comments
        });
      });
  }
  render() {
    const { userComment, comments } = this.state;
    if (!userComment) {
      return <h1>Getting Comments...</h1>;
    }
    return (
      <React.Fragment>
        <h1>
          <a target="_blank" className="link-title" href={userComment.url}>
            {userComment.title}
          </a>
        </h1>
        <ul className="post">
          <li key={userComment.id} className="posts__item">
            <div>
              <strong>by: </strong>
              <Link
                className="link-title-sub"
                to={`/user?id=${userComment.by}`}
              >
                {userComment.by}
              </Link>
              <span>
                {" "}
                <strong>on:</strong> {formatDate(userComment.time)}
              </span>
              <span>
                {" "}
                <strong>with: </strong>
                <Link
                  to={`/comments/?id=${userComment.id}`}
                  className="link-title-sub"
                >
                  {userComment.descendants}
                </Link>{" "}
                comments
              </span>
            </div>
          </li>
        </ul>
        <CommentsList comments={comments} />
      </React.Fragment>
    );
  }
}

export default Comments;
