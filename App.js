import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import TaskDetails from "./TaskDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
