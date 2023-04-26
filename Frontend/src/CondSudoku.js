import React from 'react';
import GetRowSum from './RowSum';
import { data } from './App';
import GetColumnSum from './ColumnSum';
import './CondSudoku.css'

const CondSudoku = ({ n, values }) => {
  const size = n * n;
  const subSize = Math.sqrt(size);

  const hasConflict = (startRow, startCol) => {
    const counts = {};
    for (let r = startRow; r < startRow + subSize; r++) {
      for (let c = startCol; c < startCol + subSize; c++) {
        const value = values[r][c];
        if (value) {
          if (counts[value]) return true;
          counts[value] = true;
        }
      }
    }
    return false;
  };

  const getSubGridSum = (row, col) => {
    let sum = 0;
    const startRow = row * subSize;
    const startCol = col * subSize;
    for (let r = startRow; r < startRow + subSize; r++) {
      for (let c = startCol; c < startCol + subSize; c++) {
        sum += values[r][c];
      }
    }
    return sum;
  };

  const getCellStyle = (row, col) => {
    const backgroundColor =
      hasConflict(row * subSize, col * subSize)
        ? 'red'
        : (row + col) % 2 === 0
        ? 'lightgray'
        : 'white';
    return { backgroundColor };
  };

  return (
    <div>
      <h2>Condensed View</h2>
      <div>Row Sum</div>
        <div style={{ display: 'flex',  margin: '0 auto' }}>
        <div >
            <GetRowSum n={3} values = {data} />
        </div>
        <div style={{ width: '50%', maxHeight: '200px', maxHeight: '200px', paddingTop: '0px' }}>
            <table className="sudoku-grid-cond" style={{ '--n': n }}>
            <tbody>
                {Array.from({ length: subSize }, (_, row) => (
                <tr key={row}>
                    {Array.from({ length: subSize }, (_, col) => (
                    <td key={col} style={getCellStyle(row, col)}>
                        {getSubGridSum(row, col)}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </div> 
        </div>
        
        
        <GetColumnSum n={3} values = {data} />
    </div>
   
  ); 

  // return (
  //   <div>
  //       <div style={{ display: 'flex', flexDirection: 'row',  margin: '0 auto' }}>
  //       <div style={{margin: '0 px'}}>
  //           <GetRowSum n={3} values = {data} />
  //       </div>
  //       <div style={{  maxHeight: '200px', maxHeight: '200px' }}>
  //           <table className="sudoku-grid-cond" style={{ '--n': n }}>
  //           <tbody>
  //               {Array.from({ length: subSize }, (_, row) => (
  //               <tr key={row}>
  //                   {Array.from({ length: subSize }, (_, col) => (
  //                   <td key={col} style={getCellStyle(row, col)}>
  //                       {getSubGridSum(row, col)}
  //                   </td>
  //                   ))}
  //               </tr>
  //               ))}
  //           </tbody>
  //           </table>
  //       </div> 
  //       </div>
        
        
  //       <GetColumnSum n={3} values = {data} />
  //   </div>
   
  // ); 

};

export default CondSudoku;
