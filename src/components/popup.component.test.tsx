import React from 'react';
import { render, screen } from '@testing-library/react';
import Popup from './popup.component';
import { MemoryRouter } from 'react-router-dom';

describe('Popup test', () => {
  it('Test contact title is shown', () => {
    const popupProps = {
      isOpen: true,
      onClose: () => {
        console.log('test');
      },
      title: 'Skontaktuj się z nami',
      description:
        'Chcesz, aby aktualności z Twojej strony były u nas wyświetlane? Napisz do nas!',
      cta: 'mailto:newsapp@gmail.com',
      cta_label: 'Napisz do nas!',
    };

    render(
      <MemoryRouter initialEntries={['/']}>
        <Popup {...popupProps} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Skontaktuj/i)).toBeInTheDocument();
  });

  it('Test if link item gets rendered', () => {
    const popupProps = {
      isOpen: true,
      onClose: () => {
        console.log('test');
      },
      title: 'Skontaktuj się z nami',
      description:
        'Chcesz, aby aktualności z Twojej strony były u nas wyświetlane? Napisz do nas!',
      cta: 'mailto:newsapp@gmail.com',
      cta_label: 'Napisz do nas!',
    };

    render(
      <MemoryRouter initialEntries={['/']}>
        <Popup {...popupProps} />
      </MemoryRouter>
    );

    const linkItems = screen.getAllByRole('link');
    expect(linkItems).toHaveLength(1);
  });
});
