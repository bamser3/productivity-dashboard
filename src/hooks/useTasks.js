import { useEffect, useState } from "react";

const url = "http://localhost:3001/tasks";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      });
  }, []);

  function addTask(task) {
    const taskToSend = {
      ...task,
      status: "Not Started",
      completed: false,
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskToSend),
    })
      .then((res) => res.json())
      .then((newTask) => {
        setTasks((prev) => [...prev, newTask]);
      })
      .catch((error) => console.error("Failed to add task:", error));
  }

  function deleteTask(id) {
    fetch(`${url}/${id}`, { method: "DELETE" }).then(() => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    });
  }

  function updateStatus(id, newStatus) {
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        setTasks((prev) =>
          prev.map((task) => (task.id === id ? updatedTask : task)),
        );
      })
      .catch((error) => console.error("Failed to update status:", error));
  }

  return {
    tasks,
    loading,
    addTask,
    deleteTask,
    updateStatus,
  };
}
