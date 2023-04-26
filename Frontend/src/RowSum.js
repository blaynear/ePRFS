
import React from 'react';
import './CondSudoku.css';

const GetRowSum = ({ n, values }) => {
  const size = values.length;

  // Function to calculate the sum of each row in the Sudoku table
  const getRowSum = row => {
    let sum = 0;
    for (let col = 0; col < size; col++) {
      sum += values[row][col];
    }
    return sum;
  };

  return (
   
      
        <table   style={{ borderCollapse: 'collapse', width: '10%', background: '#D3D3D3' }}>
      
      <tbody>
        {Array.from({ length: size }, (_, row) => (
          <tr key={row}>
            
            <td style={{ border: '1px outset', padding: '10px' }}>{getRowSum(row)}</td>
          </tr>
        ))}
      </tbody>
    </table>
   
    
  );
};

export default GetRowSum;

