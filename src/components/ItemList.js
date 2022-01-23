import React from "react";
import styled from "styled-components";

import Items from "./Items";

const InputStd = styled.ul`
  margin: 0;
  padding: 0 2rem;
  width: 100%;

  h2 {
    margin: 0;
    padding: 2rem 0;
    color: orange;
  }
`;

const ItemList = ({ title, todo, setTodo }) => {
  console.log(todo);
  return (
    <InputStd>
      <h2>{title}</h2>
      {todo.map((item) => (
        <Items key={item.id} text={item.text} />
      ))}
    </InputStd>
  );
};

export default ItemList;
