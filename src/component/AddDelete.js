// creates a div for the stopwatches and the button to delete corresponding stopwatch

import React, { useState } from 'react';
import Stopwatch from './Stopwatch';

export default function AddDelete() {
  const [stopwatches, setStopwatches] = useState([]);

  function handleAdd() {
    const newBlock = { id: stopwatches.length + 1, createStopwatch: <Stopwatch /> };
    setStopwatches([...stopwatches, newBlock]);
  };

  function handleDelete(id) {

    setStopwatches(stopwatches.filter(stopwatch => stopwatch.id !== id));
  };



  return (
    <div>
      
      <button onClick={handleAdd}>Make New Stopwatch</button>
      {stopwatches.map((stopwatch) => (
        <div key={stopwatch.id}>{stopwatch.createStopwatch}
          <button onClick={() => handleDelete(stopwatch.id)}>Delete</button>

        </div>
      ))}

      
    </div>
  );
}


