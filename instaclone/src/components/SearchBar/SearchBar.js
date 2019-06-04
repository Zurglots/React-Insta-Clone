import React from "react";
// import logo from "instaclonepublicimagesinstagram-seeklogo.com.svg";

const SearchBar = props => {
  return (
    <div>
      <div className="icons">
        <img
          src="instaclone\public\images\instagram-seeklogo.com.svg"
          alt="insta-logo"
        />
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
