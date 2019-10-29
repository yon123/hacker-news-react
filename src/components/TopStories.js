import React from "react";
import { getTopPosts } from "./api";
import StoryItems from "./StoryItems";

class TopStories extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    this.handleFetch();
  }
  handleFetch() {
    this.setState({
      posts: []
    });

    getTopPosts(this.props.type).then(posts => {
      // console.log("final result", posts);
      this.setState({
        posts
      });
    });
  }
  render() {
    const posts = this.state.posts;
    if (!posts) {
      return <div>Loading...</div>;
    }
    return (
      <React.Fragment>
        <h1 className="hed">Top Stories</h1>
        <StoryItems posts={posts} />
      </React.Fragment>
    );
  }
}

export default TopStories;
