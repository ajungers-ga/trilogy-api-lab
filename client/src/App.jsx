// 1. Import dependencies
import React, { useEffect, useState } from 'react';
import TrilogyList from './components/TrilogyList';

// 2. Define App component
function App() {
  const [trilogies, setTrilogies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/trilogies')
      .then(res => res.json())
      .then(data => setTrilogies(data))
      .catch(err => console.error('Error fetching trilogies:', err));
  }, []);

  return (
    <div>
      <h1>Trilogy API Frontend</h1>
      <TrilogyList trilogies={trilogies} />
    </div>
  );
}

export default App;
