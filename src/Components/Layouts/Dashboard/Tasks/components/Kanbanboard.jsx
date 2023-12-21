import  { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

export default function KanbanBoard() {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [ongoing, setOngoing] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setCompleted(json.filter((task) => task.status == "completed"));
        setOngoing(json.filter((task) => task.status == "ongoing"));
        setIncomplete(json.filter((task) => task.status == "incomplete"));
      });
  }, []);



  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
  
    if (!destination) return;
  
    const task = findItemById(draggableId, [...incomplete, ...completed, ...ongoing]);
  
    // Update the status based on the dragged column
    let newStatus;
    if (destination.droppableId === "1") {
      newStatus = "incomplete";
    } else if (destination.droppableId === "2") {
      newStatus = "ongoing";
    } else if (destination.droppableId === "3") {
      newStatus = "completed";
    }
  
    // Remove the task from the source array
    if (source.droppableId === "1") {
      setIncomplete(removeItemById(draggableId, incomplete));
    } else if (source.droppableId === "2") {
      setOngoing(removeItemById(draggableId, ongoing));
    } else if (source.droppableId === "3") {
      setCompleted(removeItemById(draggableId, completed));
    }
  
    // Update the status and add the task to the destination array
    if (newStatus === "incomplete") {
      setIncomplete([...incomplete, { ...task, status: newStatus }]);
    } else if (newStatus === "ongoing") {
      setOngoing([...ongoing, { ...task, status: newStatus }]);
    } else if (newStatus === "completed") {
      setCompleted([...completed, { ...task, status: newStatus }]);
    }
  };
  

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 className="text-4xl text-center mb-8">TODO DASHBOARD</h2>
      <div
        className="grid grid-cols-1 lg:grid-cols-2  items-center justify-center gap-8"
      >
        <Column title={"TO DO"} tasks={incomplete} id={"1"} />
        <Column title={"ONGOING"} tasks={ongoing} id={"2"} />
        <Column title={"COMPLETED"} tasks={completed} id={"3"} />
      </div>
    </DragDropContext>
  );
}























  // const handleDragEnd = (result) => {
  //   const { destination, source, draggableId } = result;

  //   if (source.droppableId == destination.droppableId) return;

  //   //REMOVE FROM SOURCE ARRAY

  //   if (source.droppableId == 2) {
  //     setCompleted(removeItemById(draggableId, completed));
  //   } else {
  //     setIncomplete(removeItemById(draggableId, incomplete));
  //   }

  //   // GET ITEM

  //   const task = findItemById(draggableId, [...incomplete, ...completed]);

  //   //ADD ITEM
  //   if (destination.droppableId == 2) {
  //     setCompleted([{ ...task, completed: !task.completed }, ...completed]);
  //   } else {
  //     setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
  //   }
  // };