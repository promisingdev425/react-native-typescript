import React from 'react';
import { View } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { Title } from './Title.jsx';

describe('Title', function() {
  let screen;

  beforeEach(() => {
    screen = render(
      <View testID="Root">
        <Title
          testID="Title"
        />
      </View>
    );
  });

  it('should render', () => {
    expect(screen.getByTestId('Root'))
      .toContain(screen.getByTestId('Title'));
  });
});
