import React from "react";
import styled from "styled-components";

const Button = ({
  text = "Button",
  backgroundColor = "rgba(23, 26, 32, 0.8)",
  textColor = "white",
  themeWhite = false,
}) => {
  return (
    <BaseButton
      bgColor={themeWhite ? "white" : backgroundColor}
      textColor={themeWhite ? "black" : textColor}
    >
      {text}
    </BaseButton>
  );
};

export default Button;

const BaseButton = styled.div`
  height: 40px;
  width: 256px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  margin: 5px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;
