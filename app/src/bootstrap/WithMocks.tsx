import React from 'react'

import {
  ReportAPIProvider,
  ReportAPI,
  makeReportAPICacheClient,
  makeGraphQLErrorLink
} from '~/services';
import { createReportAPIClientMock } from '~/services/report-api/mocks';
import { Main } from './Main';
import { WithServerProps } from './WithServer';

import { env } from '~/env';

function useReportAPIClient(authResponse, onAuthFailure, reportAPIClient) {
  return React.useMemo(() => {
    if (reportAPIClient) {
      return reportAPIClient;
    }
    else if (authResponse?.token) {
      return new ReportAPI({
        client: createReportAPIClientMock(
          makeGraphQLErrorLink(onAuthFailure),
          makeReportAPICacheClient(),
          {}, // Extra mocks
          {}, // Generator options
          env.verbose
        ),
      });
    }
    else {
      return undefined;
    }
  }, [authResponse, onAuthFailure, reportAPIClient]);
}

/**
 * <WithMocks> is used to provide mock implementations
 * of all services for the application.
 */
export function WithMocks({
  onAuthFailure,
  authResponse,
  reportAPIClient,
}: WithServerProps) {
  return (
    <ReportAPIProvider value={useReportAPIClient(authResponse, onAuthFailure, reportAPIClient)}>
      <Main />
    </ReportAPIProvider>
  );
}

