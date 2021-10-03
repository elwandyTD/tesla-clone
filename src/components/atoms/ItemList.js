import React from "react";
import styled from "styled-components";

import Link from "./Link";

const ItemList = ({ text = "", to = "" }) => {
  return (
    <BaseItemList>
      <Link text={text} to={to} />
    </BaseItemList>
  );
};

export default ItemList;

const BaseItemList = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  list-style: none;
  text-align: start;

  a {
    font-weight: 600;
    display: flex;
    padding: 15px 0;
  }
`;
