import React from "react";
import styled from "styled-components";
import { NavLink, Router } from "react-router-dom";
import navLinksData from "../appleNavLinkData";

const StyledNav = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding-left: 150px;
  padding-right: 150px;
  height: 50px;
  align-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

console.log(navLinksData);

const Header = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">
        <i style={{ transform: "scale(1.5,1.5)" }} className="fab fa-apple"></i>
      </StyledNavLink>
      {navLinksData.map(navItem => (
        <StyledNavLink key={navItem.id} to={`/${navItem.title.toLowerCase()}`}>
          {navItem.title}
        </StyledNavLink>
      ))}
      <StyledNavLink to="/search">
        <i className="fas fa-search"></i>
      </StyledNavLink>
      <StyledNavLink to="/purchases">
        <i className="fas fa-shopping-bag"></i>
      </StyledNavLink>
    </StyledNav>
  );
};

export default Header;
