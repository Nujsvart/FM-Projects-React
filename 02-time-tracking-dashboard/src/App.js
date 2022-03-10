import React from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import "./styles/app.css";
import data from "./data.json";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      {data.map(item => (
        <Card key={item.title} data={item} />
      ))}
    </div>
  );
};

export default App;
