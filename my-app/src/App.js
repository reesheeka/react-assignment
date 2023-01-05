import React, { useState } from 'react';
import "./App.css"

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increase on click
      </button>
      <br/><br/>
      <button onClick={() => setCount(count - 1)}>
        Decrease on click 
      </button>
    </div>
  );
}


export default App;