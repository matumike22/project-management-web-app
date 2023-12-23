import React from 'react';

const Task = ({ text, projectId, onDelete }) => {
  return (
    <li className='flex gap-4 justify-between w-full items-center'>
      <h4 className='text-white font-light text-sm py-0 my-0'>{text}</h4>
      <p>
        <button
          className=' my-0 bg-transparent text-red-400 font-normal hover:bg-slate-600'
          onClick={() => onDelete(projectId, text)}
        >
          Delete
        </button>
      </p>
    </li>
  );
};

export default Task;
