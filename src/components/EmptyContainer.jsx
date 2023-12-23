import React from 'react';
import emptyImage from '../assets/no-projects.png';
const EmptyContainer = ({ onAdd }) => {
  return (
    <>
      <img src={emptyImage} alt='empty image' className='h-40 w-40' />
      <h2 className='p-2'>No Project Selected</h2>
      <h3 className='font-light opacity-50'>
        Select a project or get started with a new one
      </h3>
      <button onClick={onAdd} className='my-11 bg-white'>
        Create a project
      </button>
    </>
  );
};

export default EmptyContainer;
