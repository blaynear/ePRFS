import React from 'react';

const GetColumnSum = ({ values }) => {
  const size = values.length;

  // Function to calculate the sum of each column in the Sudoku table
  const getColSum = col => {
    let sum = 0;
    for (let row = 0; row < size; row++) {
      sum += values[row][col];
    }
    return sum;
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
      
      {Array.from({ length: size }, (_, col) => (
        <div key={col} style={{ border: '1px outset', padding: '11px', maxWidth: '20px', background:'#D3D3D3'  }}>
          
          <div>{getColSum(col)}</div>
        </div>
      ))}
    </div>
    <div style={{textAlign: 'center', paddingRight: '300px'}}>Column Sum</div>
    </div>
   
    
  );
};

export default GetColumnSum;
