import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { init, end} from '../services/rampService';
import { config } from '../canada-world-en';

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    init();
    return () => end();
  }, []);

  const handleRemove = () => end();
 
  return (
    <div>
      <h1>RAMP service test</h1>
      <button onClick={handleRemove}>Remove RAMP</button>
      <Link to="/other">Other</Link>
      <div>
        {/*isLoading ? <div> Loading... </div>
          : <div> RAMP is ready! </div>
        */}
      </div>
      <div
        is="rv-map"
        style={{
          backgroundColor: "white",
          marginLeft: "50px",
          marginRight: "50px",
          height: "750px",
          display: "flex",
        }}
        rv-langs='["en-CA", "fr-CA"]'
        rv-config={config}
      ></div>
    </div>
  );
}

export default Home;
