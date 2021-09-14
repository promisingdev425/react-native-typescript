import React from 'react';
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import {
  ReportAPIProvider,
  ReportAPI,
  makeReportAPICacheClient,
  makeGraphQLErrorLink
} from '~/services';
import { createReportAPIClientMock } from '~/services/report-api/mocks';
import { themes } from '~/theme'
import { spyOnClassMethods } from './utils';

export * from '@testing-library/react-native';


type Bag = {[key: string]: any};


const ProvideAll = ({
  children,
  theme,
  reportAPI,
}) => {
  return (
    <ReportAPIProvider value={reportAPI}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ReportAPIProvider>
  )
}

/**
 * Render a component wrapped in the provided theme.
 *
 * ```jsx
 * beforeEach(() => {
 *   const screen = renderWithTheme(
 *     <MyComponent />,
 *     { theme: themes.foo }
 *   )
 * })
 * ```
 */
export const renderWithTheme = (
  ui: any,
  {
    theme = themes.light,
    ...options
  }: Bag = {}
) => {
  const screen = render(
    <ThemeProvider theme={theme}>{ui}</ThemeProvider>,
    options,
  );

  return {...screen, theme};
}

/**
 * Render a component with all dependencies of the app.
 *
 * ```jsx
 * it('should call the api', () => {
 *   const { reportAPI, ...screen } = renderWithAllDeps(
 *     <MyComponent />
 *   );
 *
 *   expect(reportAPI.getFoo).toHaveBeenCalledTimes(1);
 *
 *   expect(screen.getByText('Foo')).toBeInTheDocument();
 * })
 * ```
 */
export const renderWithAllDeps = (
  ui: any,
  {
    theme = themes.light,
    debug = false,
    onAuthFailure = () => {},
    reportAPI = new ReportAPI({
      client: createReportAPIClientMock({
        errorLink: makeGraphQLErrorLink(onAuthFailure),
        cache: makeReportAPICacheClient(),
        mocks: {}, // Extra mocks
        generatorOptions: {}, // Generator options
        debug,
      }),
      debug,
    }),
    ...options
  }: Bag = {}
) => {
  spyOnClassMethods(reportAPI);

  const screen = render(
    <ProvideAll
      theme={theme}
      reportAPI={reportAPI}
    >
      {ui}
    </ProvideAll>,
    options
  );

  return {...screen, theme, reportAPI}
}

