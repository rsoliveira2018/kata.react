import { useState } from 'react';
import Context from './Context/Context';
import Counter from './Counter';

function App() {

  const [counter, setCounter] = useState<number>(0);

  return (
    <Context.Provider value={{ counter, setCounter }}>
      <Counter></Counter>
    </Context.Provider>
  );
}

export default App;
