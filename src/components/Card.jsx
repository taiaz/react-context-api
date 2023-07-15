import React from 'react';
import Text from './Text';

const Card = () => {
  return (
    <div className="ui card" style={{ marginTop: '50px' }}>
      <div className="content">
        <div className="description">
          <Text />
        </div>
      </div>
    </div>
  );
};

export default Card;
