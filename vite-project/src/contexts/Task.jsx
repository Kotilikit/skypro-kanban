import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState(null);

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};