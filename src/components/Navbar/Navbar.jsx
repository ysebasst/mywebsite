import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import iconHamburger from "../../assets/images/icon-hamburger.svg";

import {
  StyledNav,
  StyledWrapper,
  StyledToggle,
  StyledIcon,
  StyledBrand,
  StyledNavMenu,
  StyledNavItem,
  StyledNavLink,
} from "./Navbar.styles";

import { titleBase, navItems } from "../../config/title";

function Navbar() {
  const location = useLocation();

  const [menuActive, setMenuActive] = useState(false);
  const [titleActualPage, setTitleActualPage] = useState("");

  useEffect(() => {
    document.title = `${titleBase} ${titleActualPage}`;
  }, [titleActualPage]);

  useEffect(() => {
    const navItem = navItems.filter((navItem) => {
      return navItem.url === location.pathname;
    });
    let newTitle = "404 Not Found";
    if (navItem.length > 0) {
      newTitle = navItem[0].name;
    }
    setTitleActualPage(newTitle);
  }, [location]);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleClickLink = () => {
    setMenuActive(false);
  };

  return (
    <StyledNav>
      <StyledWrapper>
        <StyledToggle
          role="button"
          aria-label="button"
          onClick={handleMenuToggle}
        >
          <StyledIcon src={iconHamburger} alt="icon hamburger" />
        </StyledToggle>
        <StyledBrand>{titleActualPage}</StyledBrand>
        <StyledNavMenu active={menuActive}>
          {navItems.map((navItem, i) => (
            <StyledNavItem key={i}>
              <StyledNavLink
                to={navItem.url}
                selected={location.pathname === navItem.url}
                onClick={handleClickLink}
              >
                {navItem.name}
              </StyledNavLink>
            </StyledNavItem>
          ))}
        </StyledNavMenu>
      </StyledWrapper>
    </StyledNav>
  );
}

export default Navbar;
