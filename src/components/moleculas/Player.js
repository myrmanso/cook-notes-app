import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({ url }) => (
  <div className="player">
    <ReactPlayer
      url={url}
      width='200px'
      height='300px'
    />
  </div>
);

export default Player;
