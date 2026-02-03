import { Link } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import "../styles/TaskCard.css";

function TaskCard({ task }) {
  const { deleteTask, updateStatus } = useTaskContext();

  return (
    <div className="task-card">
      <div className="task-left">
        <Link to={`/tasks/${task.id}`} className="task-info-link">
          <div className="task-info">
            <span className="task-title">{task.title}</span>
            <span className="task-dates">
              {task.startDate && `Start: ${task.startDate}`}{" "}
              {task.endDate && `End: ${task.endDate}`}
            </span>
          </div>
        </Link>
      </div>

      <div className="task-right">
        <select
          value={task.status}
          onChange={(e) => updateStatus(task.id, e.target.value)}
          className="custom-select"
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
