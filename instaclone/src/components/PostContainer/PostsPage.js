import React from "react";
import logo from "../../components/SearchBar/Iglogo";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCompass,
  faComment,
  faHeart,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, far, faCompass, faComment, faHeart, faUser);

class PostsPage extends React.Component {
  state = {
    data: [],
    search: "",
    filteredPosts: []
  };

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.value]: e.target.value
    });
  };

  searchFilter = e => {
    const posts = this.state.data.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({
      filteredPosts: posts
    });
  };

  render() {
    return (
      <div>
        <div className="search-header">
          <SearchBar searchFilter={this.searchFilter} />
        </div>
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.data
          }
        />
      </div>
    );
  }
}

export default PostsPage;
