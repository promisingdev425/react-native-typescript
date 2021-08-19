import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import { withTheme } from '~/theme/hocs'

import { Text } from './Text.jsx';

describe('Text', function() {
  let screen;

  beforeEach(() => {
    const InnerScreen = () => (
      <View testID="RootText">
        <Text testID="Text" />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />);
  });

  it('should render', () => {
    expect(screen.getByTestId('RootText'))
      .toContainElement(screen.getByTestId('Text'));
  });
});
