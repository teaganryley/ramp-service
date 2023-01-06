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
    await init();
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      initializeRAMP();
    }
  }, []);

  return {
    isLoading,
    RAMP: getRampInstance,
  };
};

export default useRAMP;
