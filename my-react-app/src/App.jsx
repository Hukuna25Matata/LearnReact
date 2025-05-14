import { useState } from 'react';

function App() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  return (
    <div>
      <h1>Cricket Score Tracker</h1>
      <h2>Score: {runs}/{wickets}</h2>

      <div>
        <button onClick={() => setRuns(runs + 1)}>+1 Run</button>
        <button onClick={() => setRuns(runs + 4)}>+4 Runs</button>
        <button onClick={() => setRuns(runs + 6)}>+6 Runs</button>
        <button onClick={() => setWickets(wickets + 1)}>+1 Wicket</button>
      </div>

      
    </div>
  );
}

export default App;