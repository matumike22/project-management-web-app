import React, { useRef } from 'react';
import AddTask from './AddTask';
import Task from './Task';

const Project = ({
  projectData,
  onEdit,
  onAddTask,
  onDeleteProject,
  onDeleteTask,
}) => {
  return (
    <div className=' w-2/3 min-h-full'>
      <ul>
        <li>
          <h1 className=' text-left'>{projectData.title}</h1>
        </li>
        <li>
          <label>Description</label>
          <h3>{projectData.description}</h3>
        </li>
        <li>
          <label>Due Date</label>
          <h3>{projectData.date}</h3>
        </li>
        <menu>
          <p className='w-full flex justify-end gap-4'>
            <button
              onClick={() => onDeleteProject(projectData.id)}
              className=' bg-transparent text-red-400'
            >
              Delete
            </button>
            <button
              className='px-4 py-0'
              onClick={() => onEdit(true, projectData)}
            >
              Edit
            </button>
          </p>
        </menu>
      </ul>

      <h2 className='mt-8'>Tasks</h2>
      <AddTask projectId={projectData.id} onAddTask={onAddTask} />

      <ul>
        {projectData.tasks.map((text) => {
          return (
            <Task
              key={text}
              onDelete={onDeleteTask}
              projectId={projectData.id}
              text={text}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Project;
