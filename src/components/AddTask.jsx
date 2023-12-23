import React, { useRef } from 'react';

const AddTask = ({ onAddTask, projectId, ...props }) => {
  const task = useRef();

  function handleAddTask() {
    const taskData = task.current.value;
    if (taskData.length > 1) {
      onAddTask(projectId, taskData);
      console.log(taskData);
      task.current.value = '';
    }
  }

  return (
    <div
      className='flex gap-2 justify-between w-full my-4 items-center'
      {...props}
    >
      <p className='w-full'>
        <label>Add Task</label>
        <input ref={task} id='date' type='text' />
      </p>
      <p>
        <button onClick={handleAddTask} className=' bg-white px-4 py-2 mb-1'>
          Add
        </button>
      </p>
    </div>
  );
};

export default AddTask;
