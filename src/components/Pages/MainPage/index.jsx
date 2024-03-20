import React from "react";
import styled from "styled-components";
import { Title } from "../../Atoms/Title";
import BREAKPOINT from "../../../variables/breakpoint";


export const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <StyledTodoCard></StyledTodoCard>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 60px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 20px;
  }
`
const StyledTodoCard = styled.div`
  width: 500px;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
  }
`
