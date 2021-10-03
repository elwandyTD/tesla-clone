import React from "react";
import styled from "styled-components";

const Text = ({ type = "p", text = "Text" }) => {
  if (type === "h1") {
    return <H1>{text}</H1>;
  }

  return <P>{text}</P>;
};

export default Text;

const H1 = styled.h1``;

const P = styled.p``;
