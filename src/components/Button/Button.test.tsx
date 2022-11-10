import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import Button from './Button';

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('success renders', () => {
  act(() => {
    render(<Button>Все товары</Button>, container);
  });
  expect(container.textContent).toBe('Все товары');
});

it('check class', () => {
  act(() => {
    render(<Button>Все товары</Button>, container);
  });
  expect(container.firstChild).toHaveClass('primary');

  act(() => {
    render(<Button>Все товары</Button>, container);
  });
  expect(container.firstChild).toHaveClass('medium');

  act(() => {
    render(<Button size="large">Все товары</Button>, container);
  });
  expect(container.firstChild).toHaveClass('large');

  act(() => {
    render(<Button isRounded>Все товары</Button>, container);
  });
  expect(container.firstChild).toHaveClass('isRounded');
});

it('check click', () => {
  act(() => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Все товары</Button>, container);
    fireEvent.click(screen.getByText(/Все товары/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
