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
    data: []
  };

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }
  render() {
    return (
      <div>
        <div className="search-header">
          <SearchBar />
        </div>
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default PostsPage;
