import styled from "styled-components";

import { breakpoints, colors } from "../../../config";

export const StyledFooterForm = styled.form`
  max-width: ${breakpoints.mobile}px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${colors.lightGray};
  @media screen and (min-width: ${breakpoints.tablet}px) {
    justify-self: flex-start;
  }
`;
export const StyledFormTitle = styled.h3`
  margin-bottom: 0.75rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.darkGray};
`;
