import React from 'react';
import { ReactDOM } from 'react';
import { data } from './App';

import CompleteSudoku from './CompleteSudoku';

import CondSudoku from './CondSudoku';

const Radiobtn = (props) => {
   
   if(props.radioBtnValue === "regular"){
    return (
        <CompleteSudoku n= {3} values = {data}/>
    )}
else if (props.radioBtnValue === "condensed"){
        return(
            <CondSudoku n= {3} values = {data}/>
        )
    }
   }
   
   
    
export default Radiobtn