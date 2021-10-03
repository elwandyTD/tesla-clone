import React from "react";
import styled from "styled-components";

const Link = ({ to = "", imageSrc = "", text = "" }) => {
  return (
    <BaseLink href={to}>
      {imageSrc ? <BaseImg src={`/assets/${imageSrc}`} /> : text}
    </BaseLink>
  );
};

export default Link;

const BaseLink = styled.a`
  text-decoration: none;
`;

const BaseImg = styled.img``;
