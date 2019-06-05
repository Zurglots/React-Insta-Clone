import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

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

// import CommentSection from "./components/CommentSection/CommentSection";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  render() {
    console.log(dummyData);
    return (
      <div className="main-wrapper">
        <div className="search-header">
          <SearchBar />
        </div>
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
