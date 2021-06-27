import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  font-size: 1.25rem;
`;

function ListItem(props) {
  return <StyledListItem {...props} />;
}

export default ListItem;
