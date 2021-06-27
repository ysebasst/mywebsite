import styled from "styled-components";

import colors from "../../config/colors";
import breakpoints from "../../config/breakpoints";

import { Wrapper } from "..";
import heroImage from "../../assets/images/hero.jpg";

export const StyledHeader = styled.header``;

export const StyledHero = styled.div`
  position: relative;
  min-height: 300px;
  padding: 1.5rem 0;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  user-select: none;
  @media screen and (min-width: ${breakpoints.tablet}px) {
    min-height: 400px;
    padding: 3rem 0;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
  }
`;
export const StyledHeroWrapper = styled(Wrapper)`
  position: relative;
  @media screen and (max-width: ${breakpoints.tablet - 1}px) {
    text-align: center;
  }
  @media screen and (min-width: ${breakpoints.tablet}px) {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: ${breakpoints.mobile - 48}px 1fr;
    align-items: center;
  }
`;

export const StyledHeroImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  max-width: 160px;
  border-radius: 50%;
  @media screen and (min-width: ${breakpoints.tablet}px) {
    max-width: 100%;
  }
`;
export const StyledHeroInfo = styled.div`
  text-transform: uppercase;
  @media screen and (max-width: ${breakpoints.tablet - 1}px) {
    text-align: center;
  }
  @media screen and (min-width: ${breakpoints.desktop}px) {
    margin-left: 2.5rem;
  }
`;
export const StyledHeroName = styled.h1`
  padding: 0.5rem 0;
  color: ${colors.white};
  @media screen and (min-width: ${breakpoints.tablet}px) {
    font-size: 2.125rem;
  }
  @media screen and (min-width: ${breakpoints.desktop}px) {
    font-size: 3.75rem;
  }
`;
export const StyledHeroDescription = styled.p`
  color: ${colors.white};
  @media screen and (min-width: ${breakpoints.tablet}px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: ${breakpoints.desktop}px) {
    font-size: 2rem;
  }
`;
