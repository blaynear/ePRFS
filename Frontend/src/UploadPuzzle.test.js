import React from 'react';
import { render, screen } from '@testing-library/react';
import UploadPuzzle from './UploadPuzzle';

describe('UploadPuzzle', () => {
  it('renders a form with an input and a submit button', () => {
    const { getByTestId } = render(<UploadPuzzle />);
    const form = getByTestId('upload-puzzle-form');
    expect(form).toBeTruthy();
    const input = form.querySelector('input');
    expect(input).toBeTruthy();
    const button = form.querySelector('button');
    expect(button).toBeTruthy();
  });
});