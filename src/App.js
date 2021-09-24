import React from "react";
import "./styles.css";

import NavBar from "./components/NavBar/NavBar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <TaskList title="Pendente" />
      </div>
    </div>
  );
}
