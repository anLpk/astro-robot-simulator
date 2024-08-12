import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { describe } from 'node:test';

describe('App', () => {
  it('renders the robot icon', () => {
    const { getByText } = render(<App />);
    expect(getByText('🤖')).toBeInTheDocument();
  });
});
