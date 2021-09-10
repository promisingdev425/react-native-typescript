import React from 'react';

import { PropertyIcon } from '~/assets/images';
import { AppBar } from '~/components';
import { useReportAPI, Property } from '~/services';

type MainProps = {
};

/**
 * The main application layout.
 */
export function Main({}: MainProps) {
  const api = useReportAPI();

  /* istanbul ignore next: temporary code */
  React.useEffect(() => {
    api.getProperties()
      .then((properties: Property[]) => console.log('Properties:', properties))
      .catch(e => console.error(e));
  }, []);

  return (
    <AppBar
      leftItem={<PropertyIcon />}
      title="Foo Community"
    />
  );
}

