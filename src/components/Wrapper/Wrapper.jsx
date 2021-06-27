import React from "react";
import styled from "styled-components";

import breakpoints from "../../config/breakpoints";

export const StyledWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: ${breakpoints.tablet - 1}px) {
    width: calc(100% - 3rem);
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  @media screen and (min-width: ${breakpoints.tablet}px) {
    margin-left: auto;
    margin-right: auto;
    max-width: ${breakpoints.tablet - 48}px;
  }
  @media screen and (min-width: ${breakpoints.desktop}px) {
    max-width: ${breakpoints.desktop - 48}px;
  }
`;

function Wrapper(props) {
  return <StyledWrapper {...props} />;
}

export default Wrapper;
