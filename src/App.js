import Parent from './Parent';
import './App.css';
import CounterContext from './CounterContext';
import { useState } from 'react';

function App() {
  let countState = useState(1)
  // let [count, setCount] = useState(25)

  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
