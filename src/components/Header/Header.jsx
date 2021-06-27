import React from "react";

import {
  StyledHeader,
  StyledHero,
  StyledHeroWrapper,
  StyledHeroImage,
  StyledHeroInfo,
  StyledHeroName,
  StyledHeroDescription,
} from "./Header.styles";

import Navbar from "../Navbar";
import avatarImage from "../../assets/images/avatar.png";

function Header() {
  return (
    <StyledHeader>
      <Navbar />
      <StyledHero>
        <StyledHeroWrapper>
          <StyledHeroImage src={avatarImage} />
          <StyledHeroInfo>
            <StyledHeroName>Sebastian Sierra</StyledHeroName>
            <StyledHeroDescription>
              Desarrollador de software
            </StyledHeroDescription>
          </StyledHeroInfo>
        </StyledHeroWrapper>
      </StyledHero>
    </StyledHeader>
  );
}

export default Header;
