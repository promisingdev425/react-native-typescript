import React from 'react';
import { View } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { Text } from './Text.jsx';

describe('Text', function() {
  let screen;

  beforeEach(() => {
    screen = render(
      <View testID="Root">
        <Text
          testID="Text"
        />
      </View>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('Root'))
      .toContain(screen.getByTestId('Text'));
  });
});
