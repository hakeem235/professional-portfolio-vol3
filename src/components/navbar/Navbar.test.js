import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom'; // For additional matchers

describe('Navbar Component', () => {
  it('renders correctly when menu is closed', () => {
    const { asFragment } = render(<Navbar menuOpen={false} setMenuOpen={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly when menu is open', () => {
    const { asFragment } = render(<Navbar menuOpen={true} setMenuOpen={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
