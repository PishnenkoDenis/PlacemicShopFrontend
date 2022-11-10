import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import RegistrationForm from './RegistrationForm';

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
    render(<RegistrationForm />, container);
  });
  expect(container.querySelectorAll('input').length).toEqual(2);
  fireEvent.click(
    container.getElementsByClassName('buttonRegistrationType')[0]
  );
  expect(container.querySelectorAll('input').length).toEqual(4);
});

it('success renders', () => {
  act(() => {
    render(<RegistrationForm />, container);
  });
  const tabs = container.querySelectorAll('.tab');
  expect(tabs.length).toEqual(2);
});
