import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * `<PageLoader>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export function PageLoader({
  ...rest
}) {
  return (
    <View {...rest} >
    </View>
  );
}

PageLoader.propTypes = {
};

