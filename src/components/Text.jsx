import React, { useContext } from 'react';
import ColorContext from '../context/ColorContext';

const Text = () => {
  const { color } = useContext(ColorContext);

  return (
    <div className="ui text-container">
      <h3>Change text color: {color}</h3>
      <h1 style={{ color: color }}>React context example</h1>
    </div>
  );
};

export default Text;