import React, { useState, useRef, useEffect } from "react";
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

const EditedInputStd = styled.input`
  width: 72%;
  margin-right: 0;
  border: none;
  background-color: inherit;
  color: #ffffff;
  border-bottom: 1px solid #888888;

  &:focus {
    outline: none;
  }
`;

const Items = ({ todoItem, todo, setTodo }) => {
  const [edited, setEdited] = useState(false);

  const [newText, setNewText] = useState(todoItem.text);

  const editRef = useRef(null);

  useEffect(() => {
    if (edited) {
      editRef.current.focus();
    }
  }, [edited]);

  // 체크박스 완료 항목 토글
  const checkboxHandler = () => {
    const nextTodo = todo.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodo(nextTodo);
  };

  // 수정 버튼
  const onClickEditBtn = () => {
    setEdited(true);
  };

  const onChangeEditInput = (event) => {
    setNewText(event.target.value);
  };

  const onClickSubmitBtn = () => {
    const nextTodoList = todo.map((item) => ({
      ...item,
      text: item.id === todoItem.id ? newText : item.text,
    }));
    setTodo(nextTodoList);

    setEdited(false);
  };

  // 완료 버튼 삭제버튼
  const onClickDeleteBtn = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      const nextTodo = todo.map((item) => ({
        ...item,
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));

      setTodo(nextTodo);
    }
  };

  return (
    <ItemsStd>
      {/* 체크박스 */}
      <input
        type="checkbox"
        checked={todoItem.checked}
        onChange={checkboxHandler}
      />

      {/* 아이템내용 */}
      {edited ? (
        <EditedInputStd
          type="text"
          value={newText}
          ref={editRef}
          onChange={onChangeEditInput}
        />
      ) : (
        <span>{todoItem.text}</span>
      )}

      {/* 수정 버튼 */}
      {!todoItem.checked ? (
        edited ? (
          <button type="button" onClick={onClickSubmitBtn}>
            OK
          </button>
        ) : (
          <button type="button" onClick={onClickEditBtn}>
            Fix
          </button>
        )
      ) : (
        <button type="button" onClick={onClickDeleteBtn}>
          🗑
        </button>
      )}
    </ItemsStd>
  );
};

export default Items;
