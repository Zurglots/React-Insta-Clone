import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Iglogo from "./Iglogo";

const SearchBar = props => {
  return (
    <div className="nav-bar">
      <div className="icons">
        <div className="ig-icon-wrapper">
          <FontAwesomeIcon className="ig-icon" icon={["fab", "instagram"]} />
        </div>
        <div className="ig-textlogo">
          <Iglogo />
        </div>
      </div>
      <form className="search-bar">
        <input
          placeholder="search"
          // onChange={this.handleChanges}
          // value={this.state.task}
          name=""
        />
      </form>
      <div className="right-icons">
        <FontAwesomeIcon icon={["far", "compass"]} />
        <FontAwesomeIcon icon={["far", "heart"]} />
        <FontAwesomeIcon icon={["far", "user"]} />
      </div>
    </div>
  );
};

export default SearchBar;
