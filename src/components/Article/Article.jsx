import React from "react";
import styled from "styled-components";

export const StyledArticle = styled.article``;

function Article(props) {
  return <StyledArticle {...props} />;
}

export default Article;
