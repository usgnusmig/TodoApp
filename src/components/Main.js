import React, { useState } from "react";
import styled from "styled-components";

import ItemList from "./ItemList";
import InputBox from "./InputBox";

const MainStd = styled.div`
  height: 42rem;
  width: 30rem;
  background-color: #303030;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const Main = () => {
  const [todo, setTodo] = useState([]);
  return (
    <MainStd>
      <ItemList title={"할 일"} todo={todo} setTodo={setTodo} checked={false} />

      <InputBox todo={todo} setTodo={setTodo} />

      <ItemList
        title={"완료된 항목"}
        todo={todo}
        setTodo={setTodo}
        checked={true}
      />
    </MainStd>
  );
};

export default Main;
