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

// Step 1: Asynchronously attach script to DOM
const loadScript = async (url: string) => {
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

// Step 2: Write a function that checks if a script has been loaded
const getScript = (url: string) => document.querySelector(`script[src="${url}"]`);

export {
  loadScript,
  getScript
};
