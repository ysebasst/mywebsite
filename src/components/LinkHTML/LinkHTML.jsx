import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  color: inherit;
`;

function LinkHTML(props) {
  return <StyledLink target="_blank" {...props} />;
}

export default LinkHTML;
