import React from "react";
import { getUser, getAllPosts } from "./api";
import { formatDate } from "./Helpers";
import queryString from "query-string";
import StoryItems from "./StoryItems";

class User extends React.Component {
  state = {
    userInfo: null,
    posts: []
  };
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    getUser(id)
      .then(userInfo => {
        this.setState({
          userInfo
        });
        return getAllPosts(userInfo.submitted.slice(0, 30));
      })
      .then(posts =>
        this.setState({
          posts: posts.filter(({ url }) => {
            return url;
          })
        })
      );
  }
  render() {
    const { userInfo, posts } = this.state;
    if (!userInfo) {
      return <h1 className="hed-sub">Getting User...</h1>;
    }
    return (
      <React.Fragment>
        <h1 className="hed-sub">{userInfo.id}</h1>
        <div className="user__copy">
          <span>
            <strong> joined:</strong> {formatDate(userInfo.created)}
          </span>
          <span>
            <strong> has:</strong> {userInfo.karma} <strong>karmas</strong>
          </span>
        </div>
        <div>
          <h2 className="hed-sub">About</h2>
          <p dangerouslySetInnerHTML={{ __html: userInfo.about }} />
        </div>
        <div>
          <h2 className="hed-sub">Posts</h2>
          <StoryItems posts={posts} />
        </div>
      </React.Fragment>
    );
  }
}

export default User;
