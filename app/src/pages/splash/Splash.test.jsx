import React from 'react';
import { View } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { Splash } from './Splash.jsx';

describe('Splash', function() {
  let screen;

  beforeEach(() => {
    screen = render(
      <View testID="Root">
        <Splash
          testID="Splash"
        />
      </View>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('Root'))
      .toContain(screen.getByTestId('Splash'));
  });
});
