import React, { useEffect } from 'react';
import useRAMP from './hooks/useRAMP';
import './rv-styles.css';

function App() {
  const { isLoading, map, reloadRamp } = useRAMP();

  const handleClick = () => reloadRamp();

  return (
    <div className="App">
      <h1>RAMP service test</h1>
      <div>
        {isLoading ? <div> Loading... </div>
          : <div> RAMP is ready! </div>
        }
      </div>
      <button onClick={handleClick}>Reload RAMP</button>
      <div id="rv-map"></div>
    </div>
  );
}

export default App;
