import React from "react";

import {
  StyledFooter,
  StyledFooterWrapper,
  StyledFooterCopy,
} from "./Footer.styles";

import FooterList from "./FooterList";
import FooterForm from "./FooterForm";

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <FooterList />
        <FooterForm />
      </StyledFooterWrapper>
      <StyledFooterCopy>
        &copy; Sebastian Sierra {new Date().getFullYear()}
      </StyledFooterCopy>
    </StyledFooter>
  );
}

export default Footer;
