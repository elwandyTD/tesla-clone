import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import Link from "./atoms/Link";
import ItemList from "./atoms/ItemList";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Link imageSrc="images/logo.svg" />
      <Menu>
        <Link text="Model S" />
        <Link text="Model 3" />
        <Link text="Model X" />
        <Link text="Model Y" />
      </Menu>
      <RightMenu>
        <Link text="Shop" />
        <Link text="Tesla Account" />
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <ItemList text="Existing Inventory" to="" />
        <ItemList text="Used Inventory" to="" />
        <ItemList text="Trade-in" to="" />
        <ItemList text="Cybertruck" to="" />
        <ItemList text="Roadaster" to="" />
        <ItemList text="Existing Inventory" to="" />
        <ItemList text="Existing Inventory" to="" />
        <ItemList text="Existing Inventory" to="" />
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 16;
  display: flex;
  flex-direction: column;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
