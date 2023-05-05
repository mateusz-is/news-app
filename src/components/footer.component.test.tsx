import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer.component';

describe('Footer test', () => {
  it('Test if actual hour gets rendered', () => {
    render(<Footer />);

    expect(
      screen.getByText(/aktualna\sgodzina:\s*\d+:\d+/i)
    ).toBeInTheDocument();
  });

  it('Test if amount of articles is shown', () => {
    render(<Footer />);

    expect(
      screen.getByText(/Obecnie\swy.wietlasz:\s*\d+\s*wpis.w/i)
    ).toBeInTheDocument();
  });

  it('Test amount of shown div elements', () => {
    render(<Footer />);

    const divItems = screen.getAllByRole('generic');
    expect(divItems).toHaveLength(1);
  });
});
