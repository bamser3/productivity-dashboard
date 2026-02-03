import { useTaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";
import DashboardTaskCard from "../components/DashboardTaskCard";
import "../styles/Dashboard.css";

function Dashboard() {
  const { tasks } = useTaskContext();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const inProgressTasks = tasks.filter(
    (t) => t.status === "In Progress",
  ).length;
  const notStartedTasks = tasks.filter(
    (t) => t.status === "Not Started",
  ).length;

  return (
    <div className="dashboard main-container">
      <h1>Dashboard</h1>
      <div className="dashboard-summary">
        <div className="summary-card">Total: {totalTasks}</div>
        <div className="summary-card">Completed: {completedTasks}</div>
        <div className="summary-card">In Progress: {inProgressTasks}</div>
        <div className="summary-card">Not Started: {notStartedTasks}</div>
      </div>
      <div className="dashboard-task-grid">
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <Link to={`/tasks/${task.id}`} className="dashboard-task-card-link">
              <DashboardTaskCard key={task.id} task={task} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
