import { useEffect } from 'react';

// creating a custom hook based on the useEffect hook.
// Pass in a ref and a handler. The handler is a function to run
// if the mouse clicks on something outside of the ref.
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    // defines a listener. This is a function which takes an event
    // and acts on it.
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    // adds the listener function to the document
    document.addEventListener('mousedown', listener);

    // removes the listener function when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
