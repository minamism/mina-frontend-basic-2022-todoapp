import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const Alert = ({isActive, context}) => {
  return(
    <AlertAll alertIsActive={isActive}>
      <AlertText>{context}</AlertText>
    </AlertAll>
  );
};

const AlertAll = styled.div`
  ${TEXT.S}
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  margin: 80px auto 0 auto;
  width: 400px;
  transition: all 0.5s ease 0s;
  transform: translate(0px, -40px);
  visibility: hidden;
  ${({ alertIsActive }) =>
      alertIsActive && // alertActiveが true ならば後続の CSS スタイルを適用
      `
      visibility: visible;
      transform: translate(0px, 0px);
      
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
