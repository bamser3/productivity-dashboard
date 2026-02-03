import { useParams } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import "../styles/TaskDetails.css";

function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useTaskContext();

  const task = tasks.find((t) => t.id === id);

  if (!task) return <p>Task not found</p>;

  return (
    <div className="task-details">
      <h1>{task.title}</h1>
      <p
        className={`task-status ${task.status.toLowerCase().replace(" ", "-")}`}
      >
        {task.status}
      </p>
      {task.description && (
        <p>
          <strong>Description:</strong> {task.description}
        </p>
      )}
      {task.startDate && (
        <p>
          <strong>Start:</strong> {task.startDate}
        </p>
      )}
      {task.endDate && (
        <p>
          <strong>End:</strong> {task.endDate}
        </p>
      )}
      <p>
        <strong>Completed:</strong> {task.completed ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default TaskDetails;
