import React from 'react';
import { render } from '@testing-library/react';
import CondSudoku from './CondSudoku';

describe('CondSudoku', () => {
  it('renders the condensed sudoku grid correctly', () => {
    const n = 3;
    const values = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];

    const { getByText, getAllByRole } = render(
      <CondSudoku n={n} values={values} />
    );

    const condensedGridCells = getAllByRole('cell');
    expect(condensedGridCells).toHaveLength(9);

    values.forEach((row, rowIndex) => {
      row.forEach((cellValue, colIndex) => {
        const cell = getByText(cellValue.toString());
        expect(cell).toBeInTheDocument();

        const cellStyle = cell.getAttribute('style');
        const expectedBackgroundColor =
          (Math.floor(rowIndex / n) + Math.floor(colIndex / n)) % 2 === 0
            ? 'lightgray'
            : 'white';
        expect(cellStyle).toContain(`background-color: ${expectedBackgroundColor}`);
      });
    });

    const rowSum = getByText('Row Sum');
    expect(rowSum).toBeInTheDocument();

    const columnSum = getByText('Column Sum');
    expect(columnSum).toBeInTheDocument();
  });

  
});
