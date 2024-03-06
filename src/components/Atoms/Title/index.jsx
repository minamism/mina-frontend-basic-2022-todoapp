import React from "react"; //いらなくなった
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import BREAKPOINT from "../../../variables/breakpoint";

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};

const StyledText = styled.div`
  ${TEXT.L};
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.ROBOTO};
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.M};
    font-family: ${FONTFAMILY.NOTO_SANS};
  }
`;
