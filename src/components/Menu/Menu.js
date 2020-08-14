import React, { useState, useRef } from 'react';
import { Burger } from './Burger';
import { Drawer } from './Drawer';
import { useOnClickOutside } from './hooks';

export const Menu = ({ items = [] }) => {
  // sets state for this component
  const [open, setOpen] = useState(false);

  // calls the useRef hook. The ref is set to the App div
  const node = useRef();

  //calls the custom hook passing in the ref
  useOnClickOutside(node, () => {
    setOpen(false);
  });

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} items={items} />
    </div>
  );
};
