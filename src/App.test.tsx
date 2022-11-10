import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/Header/Header';

describe(' React router', () => {
  it('search word Корзина in Header-component', () => {
    render(<Header />);
    expect(screen.getByText('Корзина')).toBeInTheDocument();
  });
});
