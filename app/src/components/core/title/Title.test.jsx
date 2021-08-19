import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';

import { withTheme } from '~/theme/hocs'

import { Title } from './Title.jsx';

describe('Title', function() {
  let screen;

  it('should render', () => {
    const InnerScreen = () => (
      <View testID="RootTitle">
        <Title testID="Title" />
      </View>
    )
    const Themed = withTheme(InnerScreen)

    screen = render(<Themed />);

    expect(screen.getByTestId('RootTitle'))
      .toContainElement(screen.getByTestId('Title'));
  });
});
