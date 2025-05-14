import { useState } from 'react';

function App() {
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
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1>Cricket Score Tracker</h1>
      <h2>Score: {runs}/{wickets}</h2>

      <div style={{ margin: '20px' }}>
        <button onClick={() => addRun(1)}>+1 Run</button>{' '}
        <button onClick={() => addRun(4)}>+4 Runs</button>{' '}
        <button onClick={() => addRun(6)}>+6 Runs</button>{' '}
        <button onClick={addWicket}>+1 Wicket</button>
      </div>

      <button onClick={resetMatch}>Reset Match</button>
    </div>
  );
}

export default App;
