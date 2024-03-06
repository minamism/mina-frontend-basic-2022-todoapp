import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

export const EditButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <PencilIcon src={pencil} />
    </Button>
  );
};

const Button = styled.button`
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  :hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;

const PencilIcon = styled.img`
  width: 20px;
  height: 20px;
`;
