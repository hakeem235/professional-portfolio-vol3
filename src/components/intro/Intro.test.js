import React from 'react';
import { render } from '@testing-library/react'; // waitFor removed as ityped is simply mocked
import Intro from './Intro';
import '@testing-library/jest-dom';

// Mock ityped
jest.mock('ityped', () => ({
  init: jest.fn(),
}));

describe('Intro Component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Intro />);
    expect(asFragment()).toMatchSnapshot();
  });
});
