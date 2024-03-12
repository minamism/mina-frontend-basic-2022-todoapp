import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef(null);

  const handleBlur = () => {
    onEditComplete(inputRef.current.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEditComplete(inputRef.current.value);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
      <StyledWrapper
        ref={inputRef}
        defaultValue={defaultValue}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
  );
};

const StyledWrapper = styled.input`
  ${TEXT.S};
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  background-color: ${COLOR.BLACK};
  border: none;
  border-radius: 2px;
  padding: 0 4px;
  width: 100%;
  outline: none;
`;
