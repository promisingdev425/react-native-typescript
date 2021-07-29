import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Centered } from '../../storybook-utils';

import { PageLoader } from './PageLoader.jsx';

storiesOf('PageLoader', module)
  .addDecorator(cb => <Centered>{cb()}</Centered>)
  .add('page loader', () => (
    <PageLoader />
  ));
