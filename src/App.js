import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import './styles.css';
import { Burger, Menu } from './components';

export default function App() {
  // sets state for this component
  const [open, setOpen] = useState(false);

  // calls the useRef hook. The ref is set to the App div
  const node = useRef();

  //calls the custom hook passing in the ref
  useOnClickOutside(node, () => {
    setOpen(false);
  });

  return (
    <div className="App" ref={node}>
      <h1>Burger Side Menu</h1>
      <h2>Uses a clever CSS, props and a custom hooks</h2>
      <Burger open={open} setOpen={setOpen} />
      <Menu
        open={open}
        setOpen={setOpen}
        items={[
          { label: 'Home', url: '#' },
          { label: 'About', url: '#' },
          { label: 'Contacts', url: '#' },
        ]}
      />
    </div>
  );
}
