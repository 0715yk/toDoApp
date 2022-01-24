import React from "react";
import styled from "styled-components";

const StyledXButton = styled.span`
    margin-left:2px;
    &:hover {
        cursor:pointer
    }
`;

const TodoItem = ({ text, done, id, toggleTask, deleteTask }) => {
  return (
    <div style={{ textDecoration: done ? "line-through" : "unset" }}>
      <span>-</span>
      {text}
      <input type="checkbox" onClick={() => toggleTask(id)} />
      <StyledXButton className="xBtn" onClick={() => deleteTask(id)}>X</StyledXButton>
    </div>
  );
};

export default TodoItem;
