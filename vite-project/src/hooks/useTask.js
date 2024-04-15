import { useContext } from "react";
import { TaskContext } from "../contexts/Task";

export function useTask() {
    return useContext(TaskContext); 
}