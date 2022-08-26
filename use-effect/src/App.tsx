import { useEffect, useState } from "react";

function randomizedNumber() : number {
  return Math.round((Math.random() * 2));
}

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [times, setTimes] = useState(1);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    
    setFirstNumber(randomizedNumber());
    setSecondNumber(randomizedNumber());
    setCount(count + 1);
    setTotalCount(totalCount + 1);
    calculateAverage();

  },[firstNumber, secondNumber]);

  function runAgain(): void{
    setCount(0);
    setTimes(times + 1);
    setFirstNumber(0);
    setSecondNumber(0);
  }

  function calculateAverage(): void {
    setAverage(Math.round((totalCount + 1) / times));
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-2 fullFillTheCol"></div>
        <div className="col-md-8">
          <h6 className="text-primary">
            <br/>
            How many times do we need to run a random number generator function in order to get the same two two-digit numbers twice in a row?
            <br/>
            Check 'Count' number to know the last one and 'Average' for the average amongst all your previous runs
            <br/> 
            <br/>
            <span className="text-danger">
              Do not Refresh the page, otherwise you will reset all the countings and average.
              <br/>
              <br/>
            </span>
          </h6>
        </div>
        <div className="col-md-2 fullFillTheCol"></div>
      </div>
      <div className="row">
        <div className="col-md-2 fullFillTheCol"></div>
        <div className="col-md-2">First Number: {firstNumber}</div>
        <div className="col-md-2">Second Number: {secondNumber}</div>
        <div className="col-md-2">Count: {count}</div>
        <div className="col-md-2">Average: {average}</div>
        <div className="col-md-2 fullFillTheCol"></div>
      </div>
      <div className="row">
        <div className="col-md-2 fullFillTheCol"></div>
        <div className="col-md-8">
          <br/>
          <button onClick={runAgain}>Run Again</button>
        </div>
        <div className="col-md-2 fullFillTheCol"></div>
      </div>
      <div className="row">
        <div className="col-md-2 fullFillTheCol"></div>
        <div className="col-md-8"><br/></div>
        <div className="col-md-2 fullFillTheCol"></div>
      </div>
    </div>
  );
}

export default App;

