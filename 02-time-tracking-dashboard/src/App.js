import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import "./styles/app.css";
import data from "./data.json";

const App = () => {
  const [showPage, setShowPage] = useState("weekly");
  return (
    <div className="container">
      <NavBar setShowPage={setShowPage} />
      {data.map(item => (
        <Card key={item.title} data={item} showPage={showPage} />
      ))}
    </div>
  );
};

export default App;
