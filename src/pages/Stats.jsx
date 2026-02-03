import { useTaskContext } from "../context/TaskContext";
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from "recharts";
import "../styles/Stats.css";

const COLORS = ["#28a745", "#f0ad4e", "#646cff"];

function Stats() {
  const { tasks } = useTaskContext();

  const completedTasks = tasks.filter((t) => t.status === "Completed").length;
  const inProgressTasks = tasks.filter(
    (t) => t.status === "In Progress",
  ).length;
  const notStartedTasks = tasks.filter(
    (t) => t.status === "Not Started",
  ).length;

  const totalTasks = tasks.length;

  const percentage =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const data = [
    { name: "Completed", value: completedTasks, fill: COLORS[0] },
    { name: "In Progress", value: inProgressTasks, fill: COLORS[1] },
    { name: "Not Started", value: notStartedTasks, fill: COLORS[2] },
  ];

  return (
    <div style={{ width: "100%", height: 420 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
          />
          <Tooltip formatter={(value, name) => [`${value}`, name]} />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>

      <div className="indicator">
        <p>You have completed</p>
        <p className="percentage">
          <strong>{percentage}%</strong>
        </p>
        <p>Of your tasks!</p>
      </div>
    </div>
  );
}

export default Stats;
