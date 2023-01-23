import { useMemo } from 'react';
import useRetryUntilResolved from './useRetryUntilResolved';

const getMapFromIFrame = (frameId: string, mapId: string) => {
  const myFrame = (document.getElementById(frameId) as HTMLIFrameElement);
  return myFrame.contentWindow?.RAMP?.mapById(mapId);
};

// Polls RAMP until map instance is found. Returns loading indicator and map reference
// Hook is currently dependent on RAMP iframe existing in the document
const useRAMP = (frameId: string, mapId = 'rv-map') => {
  const isMapReady = useRetryUntilResolved(() => getMapFromIFrame(frameId, mapId));

  const map = useMemo(() => {
    if (isMapReady) { 
      return getMapFromIFrame(frameId, mapId);
    } else {
      return null;
    }
  }, [isMapReady, frameId, mapId]);

  return { isMapReady, map };
}

export default useRAMP;
