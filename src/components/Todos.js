import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const changeInputs = (e) => {
    onChangeInput(e.target.value);
  };

  const submitTask = () => {
    onInsert(input);
    onChangeInput("");
  };

  const toggleTask = (id) => {
    onToggle(id);
  };

  const deleteTask = (id) => {
    onRemove(id);
  };

  const TaskRegistPart = styled.div`
    display: flex;
    align-items: center;

  `;

  const RegistButton = styled.button`
    margin-left: 5px;
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <div>
      <TaskRegistPart>
        <span>Type Today's todolist : </span>
        <input
          className="toDoListInput"
          type="text"
          value={input}
          onChange={changeInputs}
        />
        <RegistButton type="submit" onClick={submitTask}>
          등록
        </RegistButton>
      </TaskRegistPart>
      <div>
        {todos.map((todo) => {
          return (
            <TodoItem
              toggleTask={toggleTask}
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
