import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './Centered.styles';

export function Centered({ children }) {
  return <View style={style.main}>{children}</View>;
}

Centered.defaultProps = {
  children: null,
};

Centered.propTypes = {
  children: PropTypes.node,
};
