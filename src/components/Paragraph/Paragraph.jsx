import React from "react";
import styled from "styled-components";

export const StyledParagraph = styled.p`
  margin: 1rem 0;
  font-size: 1.25rem;
`;

function Paragraph(props) {
  return <StyledParagraph {...props} />;
}

export default Paragraph;
