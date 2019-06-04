import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = props => {
  return (
    <div>
      <div className="icons">
        <FontAwesomeIcon icon={["fab", "instagram"]} />
        <img src="/images/instagram-logo.svg" alt="insta-logo" />
      </div>
      <form className="search-bar">
        <input
          placeholder="search"
          // onChange={this.handleChanges}
          // value={this.state.task}
          name=""
        />
      </form>
    </div>
  );
};

export default SearchBar;
