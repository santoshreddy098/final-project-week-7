import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Task List</h1>
      <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded">Create Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task._id} className="border-b py-2">
            <Link to={`/task/${task._id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
