import React from "react";
import styled from "styled-components";

import Section from "./molecules/Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="order online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        description="order online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        description="order online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
