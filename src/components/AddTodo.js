import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddTodo = ({ setShowAddTodo, onDataAdded }) => {
  const { register, handleSubmit } = useForm();

  const addTodo = async (data) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    });

    if (response.ok) {
      toast.success('Task added successfully!');
      setShowAddTodo(false);
      onDataAdded(); // Notify parent component to reload data
    } else {
      toast.error('Failed to add task!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(addTodo)}>
        <label htmlFor='task'>Task : </label>
        <input type='text' placeholder='Enter your task' {...register('task')} />

        <label htmlFor='description'>Description : </label>
        <input type='text' placeholder='Enter description' {...register('description')} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
