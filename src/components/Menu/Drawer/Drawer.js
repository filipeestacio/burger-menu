import React from 'react';
import { StyledDrawer } from './Drawer.styled';

export const Drawer = ({ open, items }) => {
  return (
    <StyledDrawer open={open}>
      {items.map((item) => (
        <a href={item.url}>{item.label}</a>
      ))}
    </StyledDrawer>
  );
};
