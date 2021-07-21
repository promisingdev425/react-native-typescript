import React from 'react';
import { render, screen } from '@testing-library/react';

import { Login } from './Login.jsx';

describe('Login', function() {
  beforeEach(() => {
    render(
      <Login
        testId="Login"
      />
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });
});
