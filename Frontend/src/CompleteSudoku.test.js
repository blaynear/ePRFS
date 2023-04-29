import React from 'react';
import { render, screen } from '@testing-library/react';
import CompleteSudoku from './CompleteSudoku';

describe('CompleteSudoku', () => {
  it('renders a table with the given size', () => {
    const { getByTestId } = render(<CompleteSudoku n={3} />);
    const table = getByTestId('sudoku-grid');
    expect(table).toHaveStyle({ '--n': 3 });
  });

  it('renders cells with the correct values', () => {
    const { getByTestId } = render(<CompleteSudoku n={3} values={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]} />);
    const cells = Array.from(screen.getAllByTestId('cell'));
    expect(cells[0].textContent).toEqual('1');
    expect(cells[1].textContent).toEqual('2');
    expect(cells[2].textContent).toEqual('3');
    expect(cells[3].textContent).toEqual('4');
    expect(cells[4].textContent).toEqual('5');
    expect(cells[5].textContent).toEqual('6');
    expect(cells[6].textContent).toEqual('7');
    expect(cells[7].textContent).toEqual('8');
    expect(cells[8].textContent).toEqual('9');
  });

  it('renders cells with the correct background colors', () => {
    const { getByTestId } = render(<CompleteSudoku n={3} values={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]} />);
    const cells = Array.from(screen.getAllByTestId('cell'));
    expect(cells[0].style.backgroundColor).toEqual('white');
    expect(cells[1].style.backgroundColor).toEqual('white');
    expect(cells[2].style.backgroundColor).toEqual('white');
    expect(cells[3].style.backgroundColor).toEqual('lightgray');
    expect(cells[4].style.backgroundColor).toEqual('lightgray');
    expect(cells[5].style.backgroundColor).toEqual('lightgray');
    expect(cells[6].style.backgroundColor).toEqual('white');
    expect(cells[7].style.backgroundColor).toEqual('white');
    expect(cells[8].style.backgroundColor).toEqual('white');
  });
});