import "../styles/DashboardTaskCard.css";

function DashboardTaskCard({ task }) {
  const today = new Date();
  let daysLeftText = "No due date";

  if (task.endDate) {
    const end = new Date(task.endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      daysLeftText = `${diffDays} day${diffDays > 1 ? "s" : ""} left`;
    } else if (diffDays === 0) {
      daysLeftText = "Due today!";
    } else {
      daysLeftText = "Overdue!";
    }
  }

  return (
    <div className="dashboard-task-card">
      <div className="task-info">
        <span className="task-title">{task.title}</span>
        <span className="task-dates">{daysLeftText}</span>
      </div>

      <span
        className={`task-status ${task.status.toLowerCase().replace(" ", "-")}`}
      >
        {task.status}
      </span>
    </div>
  );
}

export default DashboardTaskCard;
