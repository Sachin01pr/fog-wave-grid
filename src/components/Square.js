import React from 'react';
import './Square.css'; // We'll create this file next

const Square = ({ color }) => {
  const squareStyle = {
    backgroundColor: color,
    border: '1px solid #333', // A dark border to make squares distinct
    transition: 'background-color 0.5s ease', // Smooth color change
  };

  return <div className="square" style={squareStyle}></div>;
};

export default Square;