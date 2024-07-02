import React, { useEffect, useState } from 'react';
import Display from './components/Display';
import AddTodo from './components/AddTodo';

const App = () => {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reloadData, setReloadData] = useState(false); // State to trigger data reload

  const handleAddTaskClick = () => {
    setShowAddTodo((prevShowAddTodo) => !prevShowAddTodo);
  };

  
  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/get', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleDataAdded = () => {
    setReloadData((prev) => !prev); // Toggle the state to trigger a reload
  };

  useEffect(() => {
    getData();
  }, [reloadData]); // Reload data whenever reloadData state changes

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            <p>Your All Tasks</p>
            <button onClick={handleAddTaskClick}>
              {showAddTodo ? 'Close Add Task' : 'Add Task'}
            </button>
          </div>
          {showAddTodo && <AddTodo setShowAddTodo={setShowAddTodo} onDataAdded={handleDataAdded} />}
          <div><p>Task</p></div>
          <div>
          {data.length>0?(data.map((item) => (
                <Display key={item.id} data={item} />
              ))):(<p>No Data Found</p>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
