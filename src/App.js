//import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
//import TodoRowItem from "./components/TodoRowItem"
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User one" },
    {
      rowNumber: 2,
      rowDescription: "Water plants setTodos",
      rowAssigned: "User Two",
    },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User one" },
    {
      rowNumber: 4,
      rowDescription: "charge phone battery",
      rowAssigned: "User one",
    },
  ]);

  const addTodo = (description, assigned) => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos((todos) => [...todos, newTodo]);
      // todos.push(newTodo);
      // console.log(todos);
    }
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add new button
          </button>
          <NewTodoForm addTodo={addTodo}></NewTodoForm>
        </div>
      </div>
    </div>
  );
}

export default App;
