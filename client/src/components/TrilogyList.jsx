// 1. Import dependencies
import React from 'react';

// 2. Define TrilogyList component
function TrilogyList({ trilogies }) {
  // 3. Return JSX
  return (
    <div>
      <h2>Movie Trilogies</h2>
      <ul>
        {trilogies.map((trilogy) => (
          <li key={trilogy._id}>
            <strong>{trilogy.title}</strong> by {trilogy.director} ({trilogy.genre})
          </li>
        ))}
      </ul>
    </div>
  );
}

// 4. Export component
export default TrilogyList;
