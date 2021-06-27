import styled from "styled-components";
import { Link } from "react-router-dom";

import { breakpoints, colors, boxShadow } from "../../config";

import Wrapper from "../Wrapper";

export const StyledNav = styled.nav`
  z-index: 10;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 3.5rem;
  background-color: ${colors.darkGray};
  user-select: none;
  box-shadow: 0 -1.75rem 1.75rem #00000020 inset;
`;

// ### ### ### WRAPPER ### ### ###
export const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// ### ### ### TOGGLE ### ### ###
export const StyledToggle = styled.span`
  display: flex;
  cursor: pointer;
  @media screen and (min-width: ${breakpoints.tablet}px) {
    display: none;
  }
`;

// ### ### ### ICON ### ### ###
export const StyledIcon = styled.img`
  width: 2.5rem;
  pointer-events: none;
`;

// ### ### ### BRAND ### ### ###
export const StyledBrand = styled.span`
  flex-grow: 1;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.white};
  @media screen and (max-width: ${breakpoints.tablet - 1}px) {
    margin-left: 1.5rem;
  }
`;

// ### ### ### NAV MENU ### ### ###
export const StyledNavMenu = styled.ul`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  @media screen and (max-width: ${breakpoints.tablet - 1}px) {
    position: absolute;
    top: 3.5rem;
    left: 0;
    min-width: min(100%, ${breakpoints.mobile}px);
    width: 100%;
    flex-direction: column;
    background-color: ${colors.darkGray};
    transform: scale(1, 0);
    transition: transform 0.3s;
    transform-origin: top;
    ${(props) => (props.active ? "transform: scale(1, 1)" : "")}
  }
  @media screen and (min-width: ${breakpoints.tablet}px) {
  }
`;

// ### ### ### NAV ITEM ### ### ###
export const StyledNavItem = styled.li`
  list-style: none;
`;

// ### ### ### NAV LINK ### ### ###
export const StyledNavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3.5rem;
  padding: 0.25rem 1rem;
  text-decoration: none;
  color: ${colors.white};
  ${(props) => (props.selected ? `background-color: ${colors.darkBlue};` : "")}
  @media screen and (min-width: ${breakpoints.tablet}px) {
    &:hover {
      box-shadow: ${boxShadow.hover};
    }
    &:active {
      box-shadow: ${boxShadow.active};
    }
  }
`;
