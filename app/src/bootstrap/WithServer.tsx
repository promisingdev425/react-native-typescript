import React from 'react'

import { ReportAPIProvider, ReportAPI } from '~/services';
import { Main } from './Main';

function useReportAPIClient(authResponse, onAuthFailure, reportAPIClient) {
  return React.useMemo(() => {
    if (reportAPIClient) {
      return reportAPIClient;
    }
    else if (authResponse?.token) {
      return new ReportAPI({onAuthFailure, authToken: authResponse?.token});
    }
    else {
      return undefined;
    }
  }, [authResponse, onAuthFailure, reportAPIClient]);
}

export type WithServerProps = {
  /**
   * A function to call on authentication failures so
   * we can prompt the user to log back in.
   */
  onAuthFailure: () => void,
  /**
   * The response from the authentication request.
   * This should include the authentication token to use
   * for API requests.
   */
  authResponse: {token: string},
  /**
   * The report API client to override the default client.
   */
  reportAPIClient: ReportAPI,
};

/**
 * <WithServer> is used to provide live versions of all
 * services for the application.
 */
export function WithServer({onAuthFailure, authResponse, reportAPIClient}: WithServerProps) {
  return (
    <ReportAPIProvider value={useReportAPIClient(authResponse, onAuthFailure, reportAPIClient)}>
      <Main />
    </ReportAPIProvider>
  );
}
