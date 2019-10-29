import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "./Helpers";
import { ThemeConsumer } from "./theme";
function StoryItems({ posts }) {
  return (
    <React.Fragment>
      <ThemeConsumer>
        {({ theme }) => (
          <ul className="post">
            {posts.map(post => {
              return (
                <li key={post.id} className="posts__item">
                  <a target="_blank" className="link-title-sub" href={post.url}>
                    {post.title}
                  </a>
                  <div>
                    <span>
                      <strong>by: </strong>
                      <Link
                        className="link-title-sub"
                        to={`/user?id=${post.by}`}
                      >
                        {post.by}{" "}
                      </Link>
                    </span>
                    <span>
                      <strong>on:</strong> {formatDate(post.time)}{" "}
                    </span>
                    <strong>with: </strong>
                    <Link
                      className="link-title-sub"
                      to={`/comments/?id=${post.id}`}
                    >
                      {post.descendants}
                    </Link>{" "}
                    comments
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </ThemeConsumer>
    </React.Fragment>
  );
}
export default StoryItems;
