import React from 'react';

import { PropertyIcon } from '~/assets/images';
import { AppBar } from '~/components';

type MainProps = {
};

/**
 * The main application layout.
 */
export function Main({}: MainProps) {
  return (
    <AppBar
      title="Foo Community"
    />
  );
}

