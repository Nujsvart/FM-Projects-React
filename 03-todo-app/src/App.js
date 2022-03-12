import React from "react";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "./styles/app.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
