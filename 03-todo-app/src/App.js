import React from "react";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Attribution from "./components/Attribution";

import { useSelector } from "react-redux";

import "./styles/app.css";

const App = () => {
  const theme = useSelector(state => state.theme);
  return (
    <div className={`app ${theme}`}>
      <Header />
      <TodoInput />
      <TodoList />
      <Attribution />
    </div>
  );
};

export default App;
