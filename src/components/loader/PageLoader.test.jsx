import React from 'react';
import { render, screen } from '@testing-library/react';

import { PageLoader } from './PageLoader.jsx';

describe('PageLoader', function() {
  beforeEach(() => {
    render(
      <PageLoader
        testId="PageLoader"
      />
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('PageLoader')).toBeInTheDocument();
  });
});
