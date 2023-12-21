// import {  SortableTable } from "./Table";
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { DropZone } from "./Tab";
import KanbanBoard from "./components/Kanbanboard";




const Tasks = () => {
    return (
       <div className="mt-16 flex" >

       <div>
       <KanbanBoard/>
       </div>
       <button className="btn flex items-center text-3xl">Add Task</button>
       </div>
    );
};

export default Tasks;