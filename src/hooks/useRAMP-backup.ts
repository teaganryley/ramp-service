import React, { useState, useEffect } from "react";
import {
  init,
  // isRampReady,
  // getRampInstance 
} from "../services/rampService";

const useRAMP = (anchor: string = 'rv-map', config?: string | JSON) => {
  const [isLoading, setIsLoading] = useState(false); //isRampReady?
  const [mapInstance, setMapInstance] = useState(null);

  const initializeRAMP = async () => {
    setIsLoading(true);
    
    await init();
    
    // once RAMP is initialized, create new map
    /* const RAMP = getRampInstance();
    const map = new RAMP.Map(document.getElementById(anchor)); // need anchor, config
    setMapInstance(map); */
    
    setIsLoading(false);
  };

  const reloadRamp = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  useEffect(() => {
    if (!isLoading) {
      initializeRAMP();
    }
  }, []);

  return {
    isLoading,
    map: mapInstance,
    reloadRamp,
  };
};

export default useRAMP;
