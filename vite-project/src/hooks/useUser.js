import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { TaskContext } from "../contexts/Task";

export function useUser() {
    return useContext(UserContext)
}
export function useTask() {
    const { putDownTask } = useContext(TaskContext);
    return { putDownTask };
}