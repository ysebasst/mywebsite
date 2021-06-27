import React from "react";
import styled from "styled-components";

import { breakpoints } from "../../config";

const StyledSection = styled.section`
  padding: 1.5rem;
  @media screen and (min-width: ${breakpoints.tablet}px) {
    padding: 2rem;
  }
  @media screen and (min-width: ${breakpoints.desktop}px) {
    padding: 4rem;
  }
`;

function Section(props) {
  return <StyledSection {...props} />;
}

export default Section;
