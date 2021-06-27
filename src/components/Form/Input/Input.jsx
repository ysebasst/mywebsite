import React from "react";
import styled from "styled-components";

import { colors } from "../../../config";

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border: 1px solid ${colors.gray};
  border-radius: 0.5rem;
  margin-bottom: ${(props) => props.marginBottom};
  &:focus {
    border: 1px solid ${colors.darkGray};
  }
`;

function Input(props) {
  return <StyledInput marginBottom=".5rem" onChange={(e) => {}} {...props} />;
}

export default Input;
