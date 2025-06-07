import React from 'react';
import './MenuScreen.css';

const MenuScreen = () => {
  return (
    <div className="menu-screen">
      <div className="menu-content">
        <h1>My Game Title</h1>
        <button>Start Game</button>
        <button>Options</button>
        <button>Exit</button>
      </div>
    </div>
  );
};

export default MenuScreen;
