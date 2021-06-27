import styled from "styled-components";

import { breakpoints, colors } from "../../config";

export const StyledMain = styled.main``;
export const StyledMainWrapper = styled.div`
  max-width: 1236px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  overflow: hidden;
  box-shadow: 0 0 1rem #00000040;
  @media screen and (min-width: ${breakpoints.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: ${breakpoints.desktop}px) {
    grid-template-columns: 463px 1fr;
  }
`;
export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const StyledInfoIcon = styled.img`
  width: 2rem;
  max-width: unset;
  filter: brightness(0.25);
`;
export const StyledInfoText = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
`;
export const StyledAside = styled.aside`
  @media screen and (min-width: ${breakpoints.tablet}px) {
    max-width: 463px;
  }
`;
export const StyledContent = styled.div`
  background-color: ${colors.lightGray};
`;
