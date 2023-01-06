/* 
  Problem: 
    We are writing a React app that uses a mapping library called RAMP.
    RAMP predates module support. We cannot import it.
    RAMP must be loaded by attaching it to the HTML document as a <script>
    RAMP has the following dependencies, at minimum:
      - jquery (script)
      - a polyfill (script)
      - a stylesheet (css doc in the head)
      - itself (rv-main.js)


  Requirements:
    We need a script which does the following:
      - loads RAMP (attaches RAMP script and dependencies to document)
      - tells us if RAMP is loaded
      - refreshes RAMP
      - destroys RAMP
      - retrieves an instance of RAMP for us to interact with 
        NOTE: This might be the responsibility of the hook itself
    
    This needs to be asynchronous, so we can reliably use RAMP without surfacing errors.


  Future:
    Additionally, we will also need to write code which handles the configuration of RAMP.
    Can this be in a hook?

*/
const jQueryURL = '/scripts/jquery-2.2.4.min.js';
const polyfillURL = '/scripts/polyfill.min.js';
const rampURL = '/scripts/rv-main.js';

const getScript = (url: string) => document.querySelector(`script[src="${url}"]`);

const isScriptLoaded = (url: string) => {
  const script = getScript(url);
  if (!script) {
    return false;
  }
  else {
    return script;
  }
};

// Asynchronously attach script to DOM
const loadScript = async (url: string) => {
  if (isScriptLoaded(url)) return;
  return new Promise((resolve, reject) => {
    // create script element
    const script = document.createElement('script');

    // set src to url passed in, set to async
    script.src = url;
    script.async =  true;

    script.addEventListener("load", () => resolve(script)); // perhaps should resolve to true
    script.addEventListener("error", () => reject(new Error(`There was an error loading script ${url}`)));

    document.head.append(script);
  });
};

// initializes RAMP and dependencies
const init = async () => {
  await loadScript(jQueryURL);
  await loadScript(polyfillURL);
  await loadScript(rampURL);
};

const getRampInstance = () => {
  if (isScriptLoaded(rampURL)) return window?.RAMP;
  console.log('RAMP not initialized, remember to run `init` first');
};

const isRampReady = () => isScriptLoaded(jQueryURL) && isScriptLoaded(polyfillURL) && isScriptLoaded(rampURL);

export {
  init,
  getRampInstance,
  isRampReady,
};
