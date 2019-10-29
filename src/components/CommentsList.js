import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "./Helpers";

function CommentsList({ comments }) {
  return (
    <React.Fragment>
      <h2 className="hed-sub">Comments</h2>
      {comments.map(comment => {
        return (
          <div>
            <div className="comment-container">
              <span>
                <strong>from: </strong>
                <Link className="link-title-sub" to={`/user?id=${comment.by}`}>
                  {comment.by}
                </Link>
              </span>
              <span>
                {" "}
                <strong>on: </strong>
                {formatDate(comment.time)}
              </span>
              <p dangerouslySetInnerHTML={{ __html: comment.text }} />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default CommentsList;
