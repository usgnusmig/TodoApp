import React from "react";
import styled from "styled-components";

const ItemsStd = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  span {
    border-bottom: 0.2px solid #888888;
    width: 73%;
  }
  button {
    align-items: end;
    border: none;
    background-color: inherit;
    color: #ffffff;
  }
`;

const Items = ({ text }) => {
  return (
    <ItemsStd>
      <input type="checkbox" />
      <span>{text}</span>
      <button type="button">Fix</button>
    </ItemsStd>
  );
};

export default Items;
