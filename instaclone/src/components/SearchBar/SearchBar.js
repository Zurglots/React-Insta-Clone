import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Iglogo from "./Iglogo";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px dashed orange;
  max-width: 1100px;
  margin: 15px auto;
`;

const InstaLogo = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
`;

const SearchBar = props => {
  return (
    <NavBar>
      <div className="icons">
        <div className="ig-icon-wrapper">
          <FontAwesomeIcon className="ig-icon" icon={["fab", "instagram"]} />
        </div>
        <div>
          <Iglogo />
        </div>
      </div>
      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="&#8981; search"
            onKeyDown={props.searchFilter}
          />
        </form>
      </div>

      <div className="right-icons">
        <FontAwesomeIcon className="nav-icons" icon={["far", "compass"]} />
        <FontAwesomeIcon className="nav-icons" icon={["far", "heart"]} />
        <FontAwesomeIcon className="nav-icons" icon={["far", "user"]} />
      </div>
    </NavBar>
  );
};

export default SearchBar;
