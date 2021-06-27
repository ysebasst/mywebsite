import React from 'react'

import styled from 'styled-components'

const StyledNotFound = styled.div`
  padding: 1.5rem 0;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
`

function NotFound() {
  return (
    <StyledNotFound>
      <h2>404 Not Found</h2>
    </StyledNotFound>
  )
}

export default NotFound
