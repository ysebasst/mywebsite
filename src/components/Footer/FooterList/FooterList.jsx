import React from "react";

import {
  StyledFooterTitle,
  StyledFooterList,
  StyledFooterItem,
  StyledFooterLink,
  StyledFooterIcon,
  StyledFooterText,
} from "./FooterList.styles";

import iconGithub from "../../../assets/images/icon-github.svg";
import iconLinkedin from "../../../assets/images/icon-linkedin.svg";
import iconEnvelope from "../../../assets/images/icon-envelope.svg";

function FooterList() {
  return (
    <div>
      <StyledFooterTitle>Contacto</StyledFooterTitle>
      <StyledFooterList>
        <StyledFooterItem>
          <StyledFooterLink href="https://github.com/ysebasst">
            <StyledFooterIcon src={iconGithub} />
            <StyledFooterText>github.com/ysebasst</StyledFooterText>
          </StyledFooterLink>
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFooterLink href="https://www.linkedin.com/in/sebastian-sierra-382858208/">
            <StyledFooterIcon src={iconLinkedin} />
            <StyledFooterText>Sebastian Sierra</StyledFooterText>
          </StyledFooterLink>
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFooterLink href="mailto:ysebasst@gmail.com">
            <StyledFooterIcon src={iconEnvelope} />
            <StyledFooterText>ysebasst@gmail.com</StyledFooterText>
          </StyledFooterLink>
        </StyledFooterItem>
      </StyledFooterList>
    </div>
  );
}

export default FooterList;
