import React from 'react';
import { render } from '@testing-library/react';
import { LandingPage } from '.';

describe('LandingPage component', () => {
  test('renders without crashing', () => {
    render(<LandingPage />);
  });
});