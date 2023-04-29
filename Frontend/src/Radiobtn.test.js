import React from 'react';
import { render, screen, getByTestId } from '@testing-library/react';
import Radiobtn from './Radiobtn';
import CompleteSudoku from './CompleteSudoku';
import CondSudoku from './CondSudoku';

describe('Radiobtn', () => {
  it('renders the correct component based on the radio button value', () => {
    const { getByTestId } = render(<Radiobtn radioBtnValue="regular" />);
    const completeSudoku = getByTestId('complete-sudoku');
    expect(completeSudoku).toBeTruthy();
    
    const { getByTestId1 } = render(<Radiobtn radioBtnValue="condensed" />);
    const condSudoku = getByTestId('cond-sudoku');
    expect(condSudoku).toBeTruthy();
  });
});