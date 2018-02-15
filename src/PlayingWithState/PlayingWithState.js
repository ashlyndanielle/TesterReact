import React from 'react';
import EventListeners from './EventListeners.js';
import ColorChanger from './ColorChanger.js';
import HoverBox from './HoverBox.js';

const PlayingWithState = () => {
  return (
    <div>
      <ColorChanger />
      <EventListeners />
      <HoverBox />
    </div>
  );
};

export default PlayingWithState;