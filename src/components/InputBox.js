import React from "react";
import styled from "styled-components";

const InputBoxStd = styled.div`
  width: 100%;

  input {
    width: 80%;
    margin: 1.5rem 2rem;
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
    margin-left: 1rem;
    padding: 0;
  }
`;

const InputBox = () => {
  return (
    <InputBoxStd>
      <input placeholder="할 일을 추가해주세요" />
      <button> + </button>
    </InputBoxStd>
  );
};

export default InputBox;
