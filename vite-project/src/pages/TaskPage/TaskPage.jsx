import PopBrowse from "../../components/popups/PopBrowse/PopBrowse";
import { useUser } from "../../hooks/useUser";

export default function TaskPage() {
    const { user } = useUser();
    
    return (
        <PopBrowse user={user}/>
    )
}