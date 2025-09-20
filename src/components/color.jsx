useEffect(() => {
  const ROWS = 15;
  const COLS = 20;
  let newColors = Array(ROWS * COLS).fill("#111");
  for (let col = 0; col < COLS; col++) {
    let waveRow = Math.abs(Math.floor(ROWS / 2 + Math.sin((frame + col) / 4) * (ROWS / 2 - 1)));
    for (let row = 0; row < ROWS; row++) {
      let idx = row * COLS + col;
      if (row === waveRow) {
        newColors[idx] = 'hsl(${col * 10 + frame * 2}, 100%, 50%)';
      }
    }
  }
  setGridColors(newColors);
}, [frame]);