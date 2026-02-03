import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import Stats from "./pages/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </>
  );
}

export default App;
