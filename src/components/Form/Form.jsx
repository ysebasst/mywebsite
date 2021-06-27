import React from "react";
import styled from "styled-components";

import { breakpoints, colors } from "../../config";

export const StyledForm = styled.form`
  max-width: ${breakpoints.mobile}px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${colors.lightGray};
  @media screen and (min-width: ${breakpoints.tablet}px) {
    justify-self: flex-start;
  }
`;

function Form(props) {
  return <StyledForm onSubmit={(e) => {}} {...props} />;
}

export default Form;
