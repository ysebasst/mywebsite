import React from "react";
import styled from "styled-components";

import { colors } from "../../config";

export const StyledTitle = styled.h2`
  position: relative;
  padding-bottom: 1.5rem;
  margin: 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.gray};
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 108px;
    height: 10px;
    background-color: ${colors.gray};
  }
`;

function Title(props) {
  return <StyledTitle {...props} />;
}

export default Title;
