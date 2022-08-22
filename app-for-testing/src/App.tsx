import { useEffect, useState } from "react";

function randomizedNumber() : number {
  return Math.round((Math.random() * 99));
}

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    setFirstNumber(randomizedNumber());
    setSecondNumber(randomizedNumber());
    setCount(count + 1);

  },[firstNumber, secondNumber]);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          How many times do we need to run a random number generator function in order to get the same two two-digit numbers twice in a row? Check 'Count' number to know.
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">First Number: {firstNumber}</div>
        <div className="col-md-4">Second Number: {secondNumber}</div>
        <div className="col-md-4">Count: {count}</div>
      </div>
    </div>
  );
}

export default App;

