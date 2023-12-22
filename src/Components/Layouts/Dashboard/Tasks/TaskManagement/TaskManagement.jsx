// TaskManagement.js
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropZone from './DropZone';
import DraggableTask from './DraggableTask';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';



const TaskManagement = () => {
    const axiosPublic = useAxiosPublic();
    const [tasks, setTasks] = useState([])
    const [tasksList, setTasksList] = useState(tasks);

    useEffect(() => {
        axiosPublic.get('/getTasks')
            .then(res => {
                setTasks(res.data);
                setTasksList(res.data)
            })
    }, [axiosPublic]);

    const handleDrop = (item, newStatus) => {
        const updatedTasks = tasksList.map((task) =>
            task._id === item.task._id ? { ...task, taskStatus: newStatus } : task
        );
        axiosPublic.put(`/tasks/${item.task._id}`, { newStatus: newStatus })
            .then(res => {
                console.log(res.data);
            })
        // console.log();
        setTasksList(updatedTasks);
    };
    const handleAll = () => {
        setTasksList(tasks);
    }
    const handleToDO = () => {
        const todo = tasks.filter(item => item.taskStatus == 'todo');
        setTasksList(todo);
    }
    const handleOnGoing = () => {
        const ongoing = tasks.filter(item => item.taskStatus == 'ongoing');
        setTasksList(ongoing);
    }
    const handleComplete = () => {
        const complete = tasks.filter(item => item.taskStatus == 'complete');
        setTasksList(complete);
    }

    return (
        <div className='w-full'>
            <div>
                <div className="join join-horizontal mt-32 ">
                    <button onClick={handleAll} className="join-item text-black hover:text-white btn  bg-white hover:bg-black border-black hover:border-white">All</button>
                    <button onClick={handleToDO} className="join-item text-black hover:text-white btn  bg-white hover:bg-black border-black hover:border-white">Todo</button>
                    <button onClick={handleOnGoing} className="join-item text-black hover:text-white btn  bg-white hover:bg-black border-black hover:border-white">Ongoing</button>
                    <button onClick={handleComplete} className="join-item text-black hover:text-white btn  bg-white hover:bg-black border-black hover:border-white">Complete</button>
                </div>
            </div>
            <DndProvider backend={HTML5Backend}>
                <div className="flex flex-col-reverse lg:flex-row justify-between  items-start gap-3">
                    <div className='min-h-screen lg:overflow-x-hidden  md:overflow-scroll h-screen w-full mt-4'>
                        <div className="grid grid-cols-1  gap-8  ">
                            {tasksList.map((task) => (
                                <DraggableTask key={task._id} task={task} />
                            ))}
                        </div>
                    </div>
                    <div className='mt-4 w-full  min-h-auto lg:min-h-screen bg-black p-4'>
                        <div className="grid grid-cols-1 gap-2   ">
                            <DropZone taskStatus="ongoing" onDrop={handleDrop} />
                            <DropZone taskStatus="todo" onDrop={handleDrop} />
                            <DropZone taskStatus="complete" onDrop={handleDrop} />
                        </div>
                    </div>

                </div>
            </DndProvider>
        </div>
    );
};

export default TaskManagement;




