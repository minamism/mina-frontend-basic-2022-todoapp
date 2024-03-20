import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "../../Atoms/Checkbox";
import { Input } from "../../Atoms/Input";
import { EditButton } from "../../Atoms/EditButton";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName,
  defaultIsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 2px 6px;
  height: 20px;
  align-items: center;
`;

const StyledCheckboxWrapper = styled.div`
  margin-right: 10px;
  height: 20px;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const StyledTaskName = styled.div`
  ${TEXT.S};
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  width: 100%;
`;

const StyledEditButtonWrapper = styled.div`
  margin-left: 10px;
  display:flex;
  align-items: center;
`;
