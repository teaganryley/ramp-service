import { useState } from 'react';
import useInterval from './useInterval';

const useRetryUntilResolved = (callback: () => boolean, interval = 200) => {
  const [hasResolved, setHasResolved] = useState(false);

  useInterval(() => {
    const result = callback();
    
    if (result) {
      setHasResolved(true);
    }
  }, hasResolved ? null : interval);

  return hasResolved;
};

export default useRetryUntilResolved;
