import React from 'react';
import './styles.css';
import { Menu } from './components';

const items = [
  { label: 'Home', url: '#' },
  { label: 'About', url: '#' },
  { label: 'Contact', url: '#' },
];

export default function App() {
  return (
    <div className="App">
      <h1>Burger Side Menu</h1>
      <h2>Uses a clever CSS, props and a custom hooks</h2>
      <Menu items={items} />
    </div>
  );
}
