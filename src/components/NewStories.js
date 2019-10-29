import React from "react";
import { getNewPosts } from "./api";
import StoryItems from "./StoryItems";
class NewStories extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    this.handleFetch();
  }
  handleFetch() {
    this.setState(() => {
      return {
        posts: []
      };
    });

    getNewPosts(this.props.type).then(posts => {
      this.setState(() => {
        return { posts };
      });
    });
  }
  render() {
    const { posts } = this.state;
    if (!posts) {
      return <div>Loading...</div>;
    }
    return (
      <React.Fragment>
        <h1 className="hed">New Stories</h1>
        <StoryItems posts={posts} />
      </React.Fragment>
    );
  }
}
export default NewStories;
