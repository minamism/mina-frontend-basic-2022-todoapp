import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export const AddTaskButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <PlusIcon src={plus} />
      <AddTaskText>タスクを追加</AddTaskText>
    </Button>
  );
};

const Button = styled.button`
  padding: 2px 6px;
  display: flex;
  gap: 10px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: ${COLOR.GREEN_TRANSPARENT};
  :hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
  }
`;

const PlusIcon = styled.img`
  width: 20px;
  height: 20px;
  color: ${COLOR.GREEN};
`;

const AddTaskText = styled.p`
  ${TEXT.S};
  font-family: ${FONTFAMILY.NOTO_SANS};
  color: ${COLOR.GREEN};
  margin: 0;
  `;
