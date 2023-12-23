import React from 'react';
import AddProject from './AddProject';

const SideBar = ({ onAdd, projects, onSelectProject }) => {
  return (
    <div className=' w-80 bg-[var(--secondary-bg)] h-screen justify-center p-10'>
      <h2>Your Projects</h2>
      <button onClick={onAdd}>Add Project +</button>
      <ul className='mt-5'>
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => onSelectProject(project.id)}
                className=' bg-transparent my-0 text-white hover:bg-white/25'
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
