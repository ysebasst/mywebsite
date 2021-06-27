import React from "react";
import styled from "styled-components";

import { colors } from "../../config";

export const StyledSubTitle = styled.h3`
  margin: 1.25rem 0;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.gray};
`;

function SubTitle(props) {
  return <StyledSubTitle {...props} />;
}

export default SubTitle;
