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
  const [todo, setTodo] = useState([
    { text: "할일1", id: 1 },
    { text: "할일2", id: 2 },
  ]);
  return (
    <MainStd>
      <ItemList title={"할 일"} todo={todo} setTodo={setTodo} />
      <InputBox />
      <ItemList title={"완료된 항목"} todo={todo} setTodo={setTodo} />
    </MainStd>
  );
};

export default Main;
