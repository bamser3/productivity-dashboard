import { createContext, useContext } from "react";
import { useTasks } from "../hooks/useTasks";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const taskState = useTasks();

  return (
    <TaskContext.Provider value={taskState}>{children}</TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
