import React from "react";
import styled from "styled-components";

import { colors } from "../../config";

export const StyledSubTitle = styled.h3`
  margin: ${(props) => (props.margin ? props.margin : "1.25rem")} 0;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) =>
    props.color === "secondary" ? colors.darkGray : colors.gray};
`;

function SubTitle(props) {
  return <StyledSubTitle {...props} />;
}

export default SubTitle;
