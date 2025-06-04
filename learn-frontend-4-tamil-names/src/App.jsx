import { useState } from 'react';
import tamilNames from './tamilNames.json';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [selectedName, setSelectedName] = useState(null);

  const filteredNames = tamilNames.filter((entry) =>
    entry.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Tamil Baby Names</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="container">
        <div className="name-list">
          <ul>
            {filteredNames.map((entry, index) => (
              <li key={index} onClick={() => setSelectedName(entry)}>
                <strong>{entry.name}</strong> ({entry.gender}) – {entry.meaning}
              </li>
            ))}
          </ul>
        </div>

        <div className="name-details">
          {selectedName ? (
            <div className="selected-card">
              <h2>{selectedName.name}</h2>
              <p><strong>Gender:</strong> {selectedName.gender}</p>
              <p><strong>Meaning:</strong> {selectedName.meaning}</p>
              <p><strong>Origin:</strong> {selectedName.origin}</p>
              <button onClick={() => setSelectedName(null)}>Close</button>
            </div>
          ) : (
            <p className="placeholder">Click a name to see details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
