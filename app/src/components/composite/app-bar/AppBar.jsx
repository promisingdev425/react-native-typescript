import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles'

/**
 * `<AppBar>`
 *
 * @param {object} props
 * @param {string} props.leftItem - Left widget(button/icon/etc) component to render
 * @param {string} props.rightItem - Right widget(button/icon/etc) component to render
 * @return {React.ReactNode}
 */
export function AppBar({
  leftItem,
  rightItem,
  ...rest
}) {
  return (
    <Container {...rest}>
      {leftItem}
      <Title variant="navigation">Bellaire Ranch</Title>
      {rightItem}
    </Container>
  );
}

AppBar.propTypes = {
  leftItem: PropTypes.element,
  rightItem: PropTypes.element,
};

AppBar.defaultProps = {
  leftItem: null,
  rightItem: null,
}

