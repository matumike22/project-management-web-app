import React, { useState } from 'react';

const AddProject = ({ onAddProject, initialData, isEdit, onCancelAdd }) => {
  const [formData, setFormData] = useState(initialData);

  const [submitted, setSubmitted] = useState(false);

  const errorLabelStyle = 'text-red-400 opacity-100';
  const errorInputStyle = 'border border-red-400 text-red-400';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSave = () => {
    const isTitleValid = formData.title.length > 3;
    const isDateValid = formData.date.length > 1;
    const isDescriptionValid = formData.description.length > 10;

    if (isTitleValid && isDateValid && isDescriptionValid) {
      onAddProject(formData, isEdit);
      // Handle saving or submission here
    } else {
      setSubmitted(true);
      console.log('Invalid form:', formData);
      // Handle showing error messages or other invalid form behavior
    }
  };

  return (
    <>
      <div className='flex flex-col w-full max-w-xl justify-center'>
        <h2 className='p-2 my-10'>{isEdit ? 'Edit' : 'Create new'} project</h2>
        <label
          className={
            submitted && formData.title.length < 1 ? errorLabelStyle : ''
          }
          htmlFor='title'
        >
          Title
        </label>
        <input
          className={
            submitted && formData.title.length < 1 ? errorInputStyle : ''
          }
          id='title'
          type='text'
          value={formData.title}
          onChange={handleChange}
        />
        <label
          className={
            submitted && formData.description.length < 1 ? errorLabelStyle : ''
          }
          htmlFor='description'
        >
          Description
        </label>
        <input
          className={
            submitted && formData.description.length < 11 ? errorInputStyle : ''
          }
          id='description'
          type='text'
          value={formData.description}
          onChange={handleChange}
        />
        <label
          className={
            submitted && formData.date.length < 1 ? errorLabelStyle : ''
          }
          htmlFor='date'
        >
          Date
        </label>
        <input
          className={
            submitted && formData.date.length < 1 ? errorInputStyle : ''
          }
          id='date'
          type='date'
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div className='flex w-full justify-end max-w-xl'>
        <button className='bg-transparent text-white' onClick={onCancelAdd}>
          Cancel
        </button>
        <button className='ml-10 px-5' onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
};

export default AddProject;
