import { useState } from 'react';

function App() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  return (
    <div>
      <h1>Cricket Score Tracker</h1>
      <h2>Score: {runs}/{wickets}</h2>
    </div>
  );
}

export default App;