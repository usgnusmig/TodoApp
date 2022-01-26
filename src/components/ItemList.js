import React from "react";
import styled from "styled-components";

import Items from "./Items";

const InputStd = styled.ul`
  margin: 0;
  padding: 0 2rem;
  padding-top: 2rem;
  width: 100%;

  h2 {
    margin: 0;
    color: orange;
  }
`;

const ItemList = ({ title, todo, setTodo, checked }) => {
  return (
    <InputStd>
      <h2>{title}</h2>
      {todo &&
        todo.map((todoItem) => {
          //삭제 목록 출력 안함
          if (todoItem.deleted) return null;

          //할일, 완료한 일 따로 출력
          if (checked !== todoItem.checked) return null;

          return (
            <Items
              key={todoItem.id}
              todoItem={todoItem}
              todo={todo}
              setTodo={setTodo}
            />
          );
        })}
    </InputStd>
  );
};

export default ItemList;
