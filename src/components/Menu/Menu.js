import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="item 1">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Item 1
      </a>
      <a href="/">
        <span role="img" aria-label="item 2">
          &#x1f4b8;
        </span>
        Item 2
      </a>
      <a href="/">
        <span role="img" aria-label="item 3">
          &#x1f4e9;
        </span>
        Item 3
      </a>
    </StyledMenu>
  );
};

export default Menu;
