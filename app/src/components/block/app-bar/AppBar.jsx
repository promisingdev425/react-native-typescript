import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * `<AppBar>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export function AppBar({
  ...rest
}) {
  return (
    <View {...rest} >
    </View>
  );
}

AppBar.propTypes = {
};

