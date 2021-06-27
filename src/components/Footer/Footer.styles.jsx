import styled from "styled-components";

import { colors, breakpoints } from "../../config";

import { Wrapper } from "..";

export const StyledFooter = styled.footer`
  background-color: ${colors.darkGray};
`;
export const StyledFooterWrapper = styled(Wrapper)`
  padding: 1.5rem 0;
  display: grid;
  gap: 3rem;
  @media screen and (max-width: ${breakpoints.tablet - 1}px) {
    justify-content: center;
  }
  @media screen and (min-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const StyledFooterCopy = styled.p`
  padding: 0.25rem 0;
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.darkGray};
  filter: brightness(0.625);
`;
