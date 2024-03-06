import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

export const Checkbox = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <CheckIcon src={check} />
    </Button>
  );
};

const Button = styled.button`
  padding: 0;
  cursor: pointer;
  background: none;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
`;

const CheckIcon = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;
