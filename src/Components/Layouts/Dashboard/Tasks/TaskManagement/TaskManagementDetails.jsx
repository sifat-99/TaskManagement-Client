import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../../Auth/AuthProvider/AuthProvider";


const TaskManagementDetails = () => {
    const [task, setTask] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)
    const [selectedDate, setSelectedDate] = useState('');
    const {
        register,
        reset,
        handleSubmit,
    } = useForm();
    useEffect(() => {
        axiosPublic.get(`/tasks/${id}`)
            .then(res => {
                setTask(res.data);
            })

    }, [id, axiosPublic])



    const onSubmit = (data) => {
        // console.log(data);
        const taskInfo = {
            userName: user.displayName,
            userEmail: user.email,
            task: data,
            taskStatus: 'todo',
            deadline: selectedDate
        }
        axiosPublic.put(`/user/tasks/${id}`, taskInfo)
            .then(res => {
                const result = res.data;
                // console.log(result);
                if (result.acknowledged) {
                    reset();
                    toast.success(' Successfully edit', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate('/dashboard/taskManagement')
                }
            })
    }
    const handleDelete = () => {
        swal({
            title: "Are you sure?",
            text: "You Want To  Delete It",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosPublic.delete(`/tasks/${id}`)
                        .then(res => {
                            const result = res.data;
                            if (result.acknowledged) {
                                swal("Delete Successfully done  ", {
                                    icon: "success",
                                });
                                reset();
                                navigate('/dashboard/taskManagement')
                            }
                        })
                } else {
                    swal("your item is safe ");
                }
            });

    }
    return (
        <div className="w-full overflow-x-auto px-1 py-3">
            <h1 className="text-4xl font-bold">{task?.task?.title}</h1>
            <p>{task.userName}</p>
            <p>{task.userEmail}</p>
            <p>{task.task?.description}</p>
            <p>{task.deadline}</p>
            <p>{task.taskStatus}</p>
            <div className="flex justify-start items-center gap-2 mt-2">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn-sm text-black hover:text-white btn  bg-white hover:bg-black border-black hover:border-white" onClick={() => document.getElementById(task._id).showModal()}>Edit</button>
                <dialog id={task._id} className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <p className="py-2 text-3xl font-bold">If You Wat To Update</p>
                        <div className="flex justify-start gap-4 flex-col items-end">
                            <div className="w-full">
                                <div className=" mt-5 lg:mt-10">
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 text-black ">
                                        <div className="flex justify-between  flex-col items-center w-full gap-4">
                                            <div className="flex flex-col justify-between items-center gap-4 w-full">
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text  font-bold ">Type</span>
                                                    </label>
                                                    <select {...register("type")} defaultValue={task?.task?.type} className="input focus:border-2 focus:border-black w-full input-bordered select " required>
                                                        <option value={task?.taskStatus}>{task?.task?.type}</option>
                                                        <option value="low">Low</option>
                                                        <option value="moderate">Mid</option>
                                                        <option value="high">High</option>
                                                    </select>
                                                    {/* <input type="text"  {...register("title", { required: true })} name="title" placeholder="Title" className="input w-full input-bordered" required /> */}
                                                </div>
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text font-bold">Task Status</span>
                                                    </label>
                                                    <select {...register("status")} name="status" className="input focus:border-2 focus:border-black w-full input-bordered select " required>
                                                        <option value={task?.taskStatus}>{task?.taskStatus}</option>
                                                        <option value="todo">todo</option>
                                                        <option value="ongoing">ongoing</option>
                                                        <option value="complete">complete</option>
                                                    </select>
                                                    {/* <input type="text"  {...register("title", { required: true })} name="title" placeholder="Title" className="input w-full input-bordered" required /> */}
                                                </div>
                                            </div>
                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="label-text font-bold">Date</span>
                                                </label>
                                                <input type="date" onChange={(event) => setSelectedDate(event.target.value)} defaultValue={task?.deadline} name="date" className="input w-full focus:border-2 focus:border-black input-bordered" required />
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Title</span>
                                            </label>
                                            <input type="text" defaultValue={task?.task?.title}  {...register("title", { required: true })} name="title" placeholder="Title" className="input  focus:border-2 focus:border-black input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-bold">Description</span>
                                            </label>
                                            <textarea type="text" {...register("description", {
                                                required: true,
                                            })} placeholder="Description" defaultValue={task?.task?.description} name="description" className="input focus:border-2 focus:border-black h-40 input-bordered" required />
                                        </div>
                                        <div className="form-control mt-6">
                                            <input className="text-black hover:text-white btn btn-sm bg-white hover:bg-black border-black hover:border-white" type="submit" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-action w-full">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn w-full btn-sm text-black hover:text-white bg-white hover:bg-black border-black hover:border-white">Close</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
                <button onClick={handleDelete} className="btn-sm text-black hover:text-white btn  bg-white hover:bg-black border-black hover:border-white">Delete</button>
            </div>
        </div>
    );
};

export default TaskManagementDetails;