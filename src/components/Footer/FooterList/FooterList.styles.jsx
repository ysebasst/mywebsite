import styled from "styled-components";

import { breakpoints, colors } from "../../../config";

import LinkHTML from "../../LinkHTML";

export const StyledFooterTitle = styled.h3`
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: ${colors.white};
  @media screen and (max-width: ${breakpoints.tablet - 1}px) {
    text-align: center;
  }
  @media screen and (min-width: ${breakpoints.tablet}px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: ${breakpoints.desktop}px) {
    font-size: 2rem;
  }
`;
export const StyledFooterList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
`;
export const StyledFooterItem = styled.li`
  list-style: none;
`;
export const StyledFooterLink = styled(LinkHTML)`
  align-items: center;
  padding: 0.25rem 0;
  text-decoration: none;
  color: ${colors.white};
  @media screen and (max-width: ${breakpoints.tablet - 1}px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: ${breakpoints.tablet}px) {
    display: inline-flex;
  }
`;
export const StyledFooterIcon = styled.img`
  @media screen and (min-width: ${breakpoints.tablet}px) {
    width: 2rem;
  }
`;
export const StyledFooterText = styled.span`
  margin-left: 0.5rem;
  @media screen and (min-width: ${breakpoints.tablet}px) {
    font-size: 1.5rem;
  }
`;
