import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import "../styles/TaskForm.css";

function TaskForm() {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      title,
      description,
      startDate,
      endDate,
      status: "Not Started",
      completed: false,
    });
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="date-fields">
        <p>Start</p>
        <input
          type="date"
          placeholder="Start date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <p>End</p>
        <input
          type="date"
          placeholder="End date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
