import React, { Component } from 'react';
import { HexColorPicker } from 'react-colorful';
import ColorContext from '../context/ColorContext';

export class Color extends Component {
  state = { color: '#aabbcc' };
  static contextType = ColorContext;

  onSetColorChanged = (color) => {
    this.setState({ color });
    this.context.onColorChange(this.state.color);
  };

  render() {
    return (
      <div className="ui field color-container">
        <h3>React color picker using react-colorful</h3>
        <HexColorPicker
          color={this.state.color}
          onChange={this.onSetColorChanged}
        />
      </div>
    );
  }
}

export default Color;
