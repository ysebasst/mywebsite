import React from "react";
import styled from "styled-components";

import { colors } from "../../../config";

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border: 1px solid ${colors.gray};
  border-radius: 0.5rem;
  margin-bottom: ${(props) => props.marginBottom};
  font-family: inherit;
  resize: none;
  &:focus {
    border: 1px solid ${colors.darkGray};
  }
`;

function Textarea(props) {
  return (
    <StyledTextarea marginBottom=".5rem" onChange={(e) => {}} {...props} />
  );
}

export default Textarea;
