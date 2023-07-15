import React, { useState } from 'react';
import ColorContext from './context/ColorContext';
import Color from './components/Color';
import Card from './components/Card';

function App() {
  const [color, setColor] = useState('#aabbcc');

  const onColorChange = (color) => {
    setColor(color);
  };

  return (
    <div className="ui container">
      <ColorContext.Provider value={{ color, onColorChange }}>
        <h4>Check details implment on Furetechnews.com</h4>
        <a
          href="https://furetechnews.com/when-and-how-to-use-react-context-api-in-react-18/"
          target="_blank"
        >
          How to use React Context API ?
        </a>
        <div className="ui grid">
          <div className="four wide column">
            <Color />
          </div>
          <div className="four wide column">
            <Card />
          </div>
        </div>
      </ColorContext.Provider>
    </div>
  );
}
export default App;
