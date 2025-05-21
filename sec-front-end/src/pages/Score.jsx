import { useState } from 'react';

function Score() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  const addRun = (value) => setRuns(runs + value);
  const addWicket = () => {
    if (wickets < 10) setWickets(wickets + 1);
  };
  const resetMatch = () => {
    setRuns(0);
    setWickets(0);
  };

  return (
    <div className="page">
      <h2>Cricket Score Tracker</h2>
      <p>Score: {runs}/{wickets}</p>

      <div className="button-group">
        <button onClick={() => addRun(1)}>+1 Run</button>
        <button onClick={() => addRun(4)}>+4 Runs</button>
        <button onClick={() => addRun(6)}>+6 Runs</button>
        <button onClick={addWicket}>+1 Wicket</button>
      </div>

      <button onClick={resetMatch} className="reset-btn">Reset Match</button>
    </div>
  );
}

export default Score;
