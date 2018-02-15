import React from 'react';
import EventListeners from './EventListeners.js';
import ColorChanger from './ColorChanger.js';
import HoverBox from './HoverBox.js';

const PlayingWithState = () => {
  return (
    <div className="main-container">
      <ColorChanger />
      <EventListeners />
      <HoverBox />
    </div>
  );
};

export default PlayingWithState;