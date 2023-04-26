
import './App.css';
import React from 'react';
import CompleteSudoku from './CompleteSudoku';
import CondTry from './CondSudoku';
import GetRowSum from './RowSum';
import Radiobtn from './Radiobtn';
import Graph from './Graph1';
import Chart from 'chart.js';
import UploadPuzzle from './UploadPuzzle';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';

// export const  data = new Array(9).fill(null).map(() => new Array(9).fill(null).map(() => Math.floor(Math.random() * 9) + 1));

export const data = [[2,7,2,6,5,9,4,8,1],[1,9,5,2,4,8,6,7,3],[6,8,4,3,1,7,5,2,9],[8,1,9,5,7,4,3,6,2],[3,5,7,9,2,6,1,4,8],[4,2,6,1,8,3,9,5,7],[5,4,1,7,9,2,8,3,6],[7,6,6,4,3,1,2,9,5],[9,3,2,8,6,5,7,1,4]]
function App() {
  const [radiobtnvalue, setRadioBtnValue] = React.useState();
  return (
    <div className="App">
      <div className='apartfromgraph' style={{ display: 'flex' }}>

          <div className='userinput' style={{ width: '50%', marginRight: '5px' }}>
              <h2>Select Type of Puzzle</h2>
              <select>
                    <option value="option 1">Sudoku</option>
                </select>
                <UploadPuzzle />
                <div style={{paddingTop:'10px', fontSize: '20px' }}>
                        <span>
            <input type="radio" name="radiobtnn" value="regular" id="regular" onChange={e=>setRadioBtnValue(e.target.value)}  />
          <label htmlFor="regular">See full sudoku grid</label>
          <br></br>

            </span>
            <span >
            <input type="radio" name="radiobtnn" value="condensed" id="condensed" onChange={e=>setRadioBtnValue(e.target.value)} />
          <label htmlFor="medium">See condensed sudoku grid</label>
            </span>
                </div>
          </div>

          <div style={{ width: '50%', marginLeft: '5px', marginTop: '20px' }}>
          <Radiobtn radioBtnValue = {radiobtnvalue}/>
          </div>
          
            
      </div>

      <div className='twographs' style={{ display: 'flex', paddingTop: '10px' }}>
        <div style={{ flex: 1, marginRight: '5px' }}>
          <Graph1 />
        </div>
        <div style={{ flex: 1 }}>
          <Graph2 />
        </div>  
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Graph3 />
      </div>
      
    
     {/* <GetRowSum n={3} values = {data}/>  */}
     

    </div>
  );
}

export default App;
