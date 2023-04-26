import React from 'react';
import './CompleteSudoku.css';

const CompleteSudoku = ({ n, values }) => {
  const size = n * n;
  const subSize = Math.sqrt(size);

  const hasConflict = (row, col) => {
    const value = values[row][col];
    if (!value) return false;
  
    // Check sub-grid
    const startRow = Math.floor(row / subSize) * subSize;
    const startCol = Math.floor(col / subSize) * subSize;
    for (let r = startRow; r < startRow + subSize; r++) {
      for (let c = startCol; c < startCol + subSize; c++) {
        if ((r !== row || c !== col) && values[r][c] === value) return true;
      }
    }
  
    return false;
  };
  const getCellStyle = (row, col) => {
    const backgroundColor =
      hasConflict(row, col)
        ? 'red'
        : (Math.floor(row / subSize) + Math.floor(col / subSize)) % 2 === 0
        ? 'lightgray'
        : 'white';
    return { backgroundColor };
  };

  return (
    <div>
      <h2>Full Sudoku View</h2>
      <table className="sudoku-grid" style={{ '--n': n }}>
      <tbody>
        {Array.from({ length: size }, (_, row) => (
          <tr key={row}>
            {Array.from({ length: size }, (_, col) => (
              <td key={col} style={getCellStyle(row, col)}>
                {values[row][col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default CompleteSudoku;
