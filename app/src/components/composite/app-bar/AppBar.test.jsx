import React from 'react';
import { View } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { AppBar } from './AppBar.jsx';

describe('AppBar', function() {
  let screen;

  beforeEach(() => {
    screen = render(
      <View testID="Root">
        <AppBar
          testID="AppBar"
        />
      </View>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('Root'))
      .toContainElement(screen.getByTestId('AppBar'));
  });
});
