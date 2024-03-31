import React from "react";
import styled, { keyframes } from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const Alert = ({ isActive, context }) => {
  return (
    <AlertAll alertIsActive={isActive}>
      <AlertText>{context}</AlertText>
    </AlertAll>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AlertAll = styled.div`
  ${TEXT.S}
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  margin: 80px auto 0 auto;
  width: 400px;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  animation: ${fadeIn} 0.5s ease forwards; /* アニメーションを追加 */
  ${({ alertIsActive }) =>
    alertIsActive &&
    `
      visibility: visible;
  `}
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: auto;
    margin: 40px 20px 0 20px;
  }
`;

const AlertText = styled.p`
  padding: 10px 20px;
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.NOTO_SANS};
  border-radius: 4px;
  background-color: ${COLOR.RED};
`;
