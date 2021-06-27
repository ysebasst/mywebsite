import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  margin: 1rem 0;
  padding-left: 1.5rem;
`;

function List(props) {
  return <StyledList {...props} />;
}

export default List;
