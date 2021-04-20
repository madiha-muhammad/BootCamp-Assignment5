import Parent from './Parent';
import './App.css';
import CounterContext from './CounterContext';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(25)

  return (
    <CounterContext.Provider value={count}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
