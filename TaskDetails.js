import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/tasks/${id}`).then((res) => {
      setTask(res.data);
    });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(() => {
      navigate("/");
    });
  };

  if (!task) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
    </div>
  );
};

export default TaskDetails;
