import styled from "styled-components";

import { breakpoints, colors } from "../../../config";

export const StyledFooterForm = styled.form`
  max-width: ${breakpoints.mobile}px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${colors.lightGray};
  @media screen and (min-width: ${breakpoints.tablet}px) {
    justify-self: flex-start;
  }
`;
export const StyledFormTitle = styled.h3`
  margin-bottom: 0.75rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.darkGray};
`;

// Modal
export const Modal = styled.div`
  z-index: 60;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0.5rem;
  background-color: #00000080;
  transition: transform 0.3s;
  transform: ${(props) => (props.show ? "scale(1)" : "scale(0)")};
`;

// Modal Button Close
export const ModalButtonClose = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  background-color: #000000c0;
  cursor: pointer;
`;

// Modal Info
export const ModalInfo = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${colors.white};
  h3 {
    margin-bottom: 1rem;
  }
`;
