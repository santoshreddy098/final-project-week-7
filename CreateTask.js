import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/tasks", { title, description }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Create Task</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required className="border p-2"/>
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2"/>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
};

export default CreateTask;
