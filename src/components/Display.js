import React, { useState } from "react";
import toast from "react-hot-toast";

const Display = ({ data }) => {
  const [task, setTask] = useState(data.task);
  const [description, setDescription] = useState(data.description);
  const [createdAt, setCreatedAt] = useState(data.createdAt);
  const [updatedAt, setUpdatedAt] = useState(data.updatedAt);
  const [save, setSave] = useState(true);

  const updateData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/update/${data._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task, description }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } else {
        toast.success("Data Updated");
      }

      const updatedData = await response.json();
      console.log('Data updated successfully:', updatedData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleSaveClick = () => {
    setSave((prevSave) => !prevSave);
    if (!save) {
      updateData();
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/delete/${data._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast.success("Data Deleted");
      window.location.reload();
      // Optionally handle any state updates or UI changes after deletion
    } catch (error) {
      console.log('Error deleting data:', error);
      toast.error("Error Deleting Data");
    }
  };

  return (
    <div className="flex flex-row gap-10">
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          disabled={save}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={save}
        />
        <input
          type="text"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
          disabled={save}
        />
        <input
          type="text"
          value={updatedAt}
          onChange={(e) => setUpdatedAt(e.target.value)}
          disabled={save}
        />
      </div>
      <button onClick={handleSaveClick}>
        {save ? "Edit" : "Save"}
      </button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Display;
