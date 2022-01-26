import React, { useState, useRef } from "react";
import styled from "styled-components";

const InputBoxStd = styled.div`
  width: 100%;

  input {
    width: 73%;
    margin: 1.5rem 1.5rem 0rem 4rem;
    margin-right: 0;
    height: 1.5rem;
    border: none;
    background-color: inherit;
    color: #ffffff;
    border-bottom: 1px solid #888888;

    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    background: inherit;
    color: #ffffff;
    font-size: 1.5rem;
    margin-left: 1.5rem;
    padding: 0;
  }
`;

const InputBox = ({ todo, setTodo }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onClickHandler = (event) => {
    event.preventDefault();

    const nextTodo = todo.concat({
      id: todo.length,
      text,
      checked: false,
      deleted: false,
    });

    setTodo(nextTodo);

    setText("");
    inputRef.current.focus();
  };

  return (
    <InputBoxStd>
      <input
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef}
        placeholder="할 일을 추가해주세요"
        onChange={onChangeHandler}
      />
      <button type="submit" onClick={onClickHandler}>
        +
      </button>
    </InputBoxStd>
  );
};

export default InputBox;
