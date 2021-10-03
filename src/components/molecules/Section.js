import React from "react";
import styled from "styled-components";

import Button from "../atoms/Button";
import Text from "../atoms/Text";

const Section = ({
  title = "",
  description = "",
  leftBtnText = "",
  rightBtnText = "",
  backgroundImg = "",
}) => {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <ItemText>
        <Text text={title} type="h1" />
        <Text text={description} />
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <Button text={leftBtnText} />
          {rightBtnText && <Button text={rightBtnText} themeWhite={true} />}
        </ButtonGroup>
        <DownArrow src="/assets/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    `url("/assets/images/${props.backgroundImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 2s;
`;

const Buttons = styled.div``;
