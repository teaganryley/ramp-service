import React, { useState, useEffect } from "react";
import {
  init,
  // isRampReady,
  getRampInstance 
} from "../services/sketch";

const useRAMP = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initializeRAMP = async () => {
    setIsLoading(true);
    await init(); // try catch with window here?
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      initializeRAMP();
    }
  }, [isLoading]);

  return {
    isLoading,
    RAMP: getRampInstance,
  };
};

export default useRAMP;
