import React from "react";
import styled from "styled-components";

import { colors } from "../../config";

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: ${colors.white};
  background-color: ${colors.blue};
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${colors.darkBlue};
  }
  &:active {
    background-color: ${colors.lightBlue};
  }
`;

function Button(props) {
  return <StyledButton type="button" onClick={(e) => {}} {...props} />;
}

export default Button;
