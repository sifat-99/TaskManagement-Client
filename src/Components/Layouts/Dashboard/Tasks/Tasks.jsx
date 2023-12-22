
import { AddTask } from "./AddTask";
import KanbanBoard from "./components/Kanbanboard";




const Tasks = () => {
    return (
       <div className="mt-16 flex" >

       <div>
       <KanbanBoard/>
       </div>
        <AddTask ></AddTask>
       </div>
    );
};

export default Tasks;