import React from 'react';
import { StyledMenu } from './Menu.styled';

export const Menu = ({ open, items = [] }) => {
  return (
    <StyledMenu open={open}>
      {items.map((item) => (
        <a href={item.url}>{item.label}</a>
      ))}
    </StyledMenu>
  );
};
