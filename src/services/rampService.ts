const styleURL = '/scripts/rv-styles.css';
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

const loadStyles = (url: string) => {
  const styleSheet = document.createElement('link');
  
  styleSheet.rel = 'stylesheet';
  styleSheet.href = url;

  document.head.appendChild(styleSheet);
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
  console.log('init RAMP');
  try {
    // loadStyles(styleURL);
    // console.log('styles loaded');
    await loadScript(jQueryURL);
    console.log('jquery loaded');
    await loadScript(polyfillURL);
    console.log('polyfill loaded');
    await loadScript(rampURL);
    console.log('ramp loaded');
  } catch(error) {
    console.error(`There was an error loading RAMP: ${error}`);
  }
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
