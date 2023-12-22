// DraggableTask.js

import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'


const DraggableTask = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  console.log(task)

  const opacity = isDragging ? 0.5 : 1;

  return (
    <Link
      ref={drag}
      style={{ opacity }}
      to={`${task._id}`}
      className="p-4 lg:mr-28 w-auto lg:w-96 bg-white  border  overflow-ellipsis border-gray-300 space-y-2 flex flex-col justify-between rounded-md  hover:bg-gray-100 duration-100 "
    >
      <h3 className=" font-bold text-3xl overflow-ellipsis">{task.task?.title}</h3>
      <p className='overflow-hidden overflow-ellipsis'>{task.task?.description}</p>
      <div className='flex flex-col justify-between '>
        {
          task.taskStatus == 'complete' ? <> <p ><span className='font-bold'>Status:</span><span className='text-green-500'> {task.taskStatus}</span></p></> : <> <p ><span className='font-bold'>Status:</span>{task.taskStatus}</p></>
        }

        <p><span className='font-bold'>DeadLine:</span>{task?.deadline}</p>
      
      </div>
    </Link>
  );
};

export default DraggableTask;

DraggableTask.propTypes = {
  task: PropTypes.object.isRequired,
};
