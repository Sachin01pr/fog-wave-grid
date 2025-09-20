import React, { useState, useEffect } from 'react';
import Square from './Square';
import './Grid.css';

const ROWS = 15;
const COLS = 20;

const Grid = () => {
  const [grid, setGrid] = useState([]);
  const [waveIndex, setWaveIndex] = useState(0);
  const [isMovingForward, setIsMovingForward] = useState(true);
  const [waveColor, setWaveColor] = useState('rgb(0, 255, 0)'); // New state for color

  // Initialize the grid once when the component mounts
  useEffect(() => {
    const initialGrid = Array(ROWS)
      .fill(null)
      .map(() => Array(COLS).fill('gray'));
    setGrid(initialGrid);
  }, []);

  // Effect to change the color every 5 seconds
  useEffect(() => {
    const changeColorInterval = setInterval(() => {
      // Array of colors to choose from
      const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setWaveColor(randomColor);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the interval
    return () => clearInterval(changeColorInterval);
  }, []); // Empty dependency array means this runs only once on mount

  // Effect to handle the bouncing wave animation
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      // Create a fresh grid for the new state
      const newGrid = Array(ROWS)
        .fill(null)
        .map(() => Array(COLS).fill('gray'));

      // Update only the colors for the current wave index
      for (let i = 0; i < ROWS; i++) {
        newGrid[i][waveIndex] = waveColor; // Use the waveColor state
      }

      setGrid(newGrid);

      // Bouncing logic
      if (isMovingForward) {
        if (waveIndex < COLS - 1) {
          setWaveIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsMovingForward(false);
          setWaveIndex((prevIndex) => prevIndex - 1);
        }
      } else {
        if (waveIndex > 0) {
          setWaveIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsMovingForward(true);
          setWaveIndex((prevIndex) => prevIndex + 1);
        }
      }
    }, 100); // Animation speed

    return () => clearTimeout(animationTimeout); // Cleanup
  }, [waveIndex, isMovingForward, waveColor]); // Add waveColor to dependencies

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((color, colIndex) => (
            <Square key={'${rowIndex}-${colIndex}'} color={color} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;