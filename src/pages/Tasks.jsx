import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";
import "../styles/Tasks.css";

function Tasks() {
  const { tasks, loading } = useTaskContext();
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div className="tasks-page">
      <h1 className="tasks-title">Tasks</h1>
      <TaskForm />
      <FilterBar filter={filter} setFilter={setFilter} />

      <div className="task-list-container">
        {filteredTasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}

export default Tasks;
