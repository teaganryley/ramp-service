import React, { useState, useEffect } from "react";
import {
  init,
  // isRampReady,
  getRampInstance 
} from "../services/sketch";

const useRAMP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);

  const initializeRAMP = async () => {
    setIsLoading(true);
    try {
      await init();
      // once RAMP is initialized, create new map
      const RAMP = getRampInstance();
      const map = new RAMP.Map(); // need anchor, config
      setMapInstance(map);
    } catch(e) {
      console.error('Error initalizing RAMP: ', e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      initializeRAMP(); // await here?
    }
  }, [isLoading]);

  return {
    isLoading,
    map: mapInstance,
  };
};

export default useRAMP;
