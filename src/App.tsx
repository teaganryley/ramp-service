import React, { useEffect } from 'react';
import useRAMP from './hooks/useRAMP';

function App() {
  const { isLoading, RAMP } = useRAMP();
  
  return (
    <div className="App">
      <h1>RAMP service test</h1>
      <div>
        {isLoading ? <div> Loading... </div>
          : <div> RAMP is ready! </div>
        }
      </div>
    </div>
  );
}

export default App;
