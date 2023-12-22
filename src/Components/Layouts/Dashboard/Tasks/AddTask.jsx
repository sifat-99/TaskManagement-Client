import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";

export function AddTask() {
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Incomplete");

  const handleOpen = () => setOpen(!open);



  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Access all the form values
    const formData = {
      taskTitle,
      taskDescription,
      startDate,
      endDate,
      priority,
      status,
    };

    // Do something with the form data (e.g., send it to a server)
    console.log('Form Data:', formData);









    // Close the modal
    setOpen(false);
    // Reset the form
    setTaskTitle("");
    setTaskDescription("");
    setStartDate("");
    setEndDate("");
    setPriority("Low");
    setStatus("Incomplete");
  };







  return (
    <>
      <Button
        color="blueGray"
        rounded
        className="mb-4 h-12 w-40  text-nowrap"
        onClick={handleOpen}
      >
        <span className="text-white">Add-Task</span>
        <span className="text-xl text-white ml-2">+</span>
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Long Dialog</DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Task Title
              </Typography>
              <Input
                size="lg"
                type="text"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Task Description
              </Typography>
              <Input
                size="lg"
                type="text"
                placeholder="Task Description"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
              <div className="flex  gap-6">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Start Date
                  </Typography>
                  <Input
                    size="lg"
                    type="date"
                    placeholder="Task Description"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    End Date
                  </Typography>
                  <Input
                    size="lg"
                    type="date"
                    placeholder="Task Description"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Priority
              </Typography>
              <div className="w-72">
                <Select
                  label="Select Version"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <Option>Low</Option>
                  <Option>Moderate</Option>
                  <Option>High</Option>
                </Select>
              </div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Status
              </Typography>
              <div className="w-72">
                <Select
                  label="Select Version "
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <Option>Incomplete</Option>
                  <Option>Ongoing</Option>
                </Select>
              </div>
            </div>
            <Button type="submit" variant="gradient" color="green" className="mt-12 ">
            Add Task
          </Button>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
