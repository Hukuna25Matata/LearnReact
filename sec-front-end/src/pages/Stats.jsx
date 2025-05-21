function Stats() {
    const matchStats = {
      totalMatches: 3,
      totalRuns: 258,
      totalWickets: 22,
      highestScore: 98,
    };
  
    return (
      <div className="page">
        <h2>Sample Match Stats</h2>
        <ul>
          <li>Total Matches Played: {matchStats.totalMatches}</li>
          <li>Total Runs Scored: {matchStats.totalRuns}</li>
          <li>Total Wickets Taken: {matchStats.totalWickets}</li>
          <li>Highest Individual Score: {matchStats.highestScore}</li>
        </ul>
      </div>
    );
  }
  
  export default Stats;
  