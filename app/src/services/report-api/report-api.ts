import React from 'react';

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  // gql,
  // Observable,
} from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import { ServiceBase } from '@thesoulfresh/utils';

import { env } from '~/env';

import { LoggingLink, makeGraphQLErrorLink } from '../graphql-utils';
import { fromReportGraph /*, toReportGraph*/ } from './transform';
import { makeReportAPICacheClient } from './cache';

import * as graph from './report-api-definitions';

type ReportAPIOptions = {
  /**
   * The authentication response from the auth service.
   */
  onAuthFailure?: () => void,
  /**
   * A function to call if network requests return an authentication error.
   */
  authToken?: string,
  /**
   * A preconfigured ReportAPIClient to use instead of creating one.
   */
  client?: ApolloClient<any>,
  /**
   * The URL of the Report API.
   */
  url?: string,
  /**
   * Whether to enable verbose logging.
   */
  debug?: boolean,
};

/*
 * Use this class to make GraphQL requests.
 *
 * Global error handling is taken care of
 * by the Apollo client configuration.
 */
export class ReportAPI extends ServiceBase {
  constructor({
    onAuthFailure,
    authToken,
    client,
    url = env.reportGraphAPI,
    debug = true
  }: ReportAPIOptions) {
    /* istanbul ignore next: never use the live api during testing */
    if (!client) {
      const retry = new RetryLink();

      const http = new HttpLink({
        uri: url,
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });

      const errorLink = makeGraphQLErrorLink(onAuthFailure);

      const links = [errorLink, retry, http];

      if (env.verbose) links.unshift(new LoggingLink());

      client = new ApolloClient({
        link: ApolloLink.from(links),
        cache: makeReportAPICacheClient(),
      });
    }

    super(client, debug);

    this.info('created with API', env.reportGraphAPI);
  }

  /**
   * Clear the data cache (for example after logout).
   * Returns a promise that will resolve after the
   * cache has been cleared.
   *
   * For more info, see:
   * https://www.apollographql.com/docs/react/caching/cache-interaction/#resetting-the-store
   */
  clear() {
    return this.client.clearStore();
  }

  // Example of how to get a collection from the cache
  // getCachedItems() {
  //   const { items } = this.client.readQuery({
  //     query: graph.GET_ITEMS,
  //   });
  //   return items;
  // }

  // Example of how to put a collection in the cache
  // updateCachedItems(items) {
  //   this.client.writeQuery({
  //     query: graph.GET_ITEMS,
  //     data: {items},
  //   });
  // }

  // Example of how to get an item from the cache
  // getCachedItem(itemId) {
  //   const { items } = this.client.readQuery({
  //     query: graph.GET_ITEM,
  //     variables: {id: itemId}
  //   });
  //
  //   // Add the new item to the collection.
  //   return (items && items.length > 0)
  //     ? items[0]
  //     : null;
  // }

  // Example of how to put an item in the cache
  // updateCachedItem(itemId, items) {
  //   this.client.writeQuery({
  //     query: graph.GET_ITEM,
  //     variables: {id: itemId},
  //     data: {items: [ items ]},
  //   });
  // }

  // Example of how to observe the cache
  // watchItems() {
  //   return new Observable(o => this.client.watchQuery({
  //     query: graph.GET_ITEMS,
  //     fetchResults: true,
  //     fetchPolicy: 'cache-first',
  //   }).subscribe({
  //     next: results => {
  //       this.log('GET_ITEMS NEXT >', results);
  //
  //       // Transform the data into the format used by the UI
  //       const out = results.data.items.map(fromGraph.item);
  //       this.info('watchItems NEXT >', out);
  //       o.next(out);
  //     },
  //     // NOTE: This error must be bound to `o` correctly.
  //     error: err => o.error(err),
  //   }));
  // }

  getProperties() {
    this.debug('getProperties');

    return this.client.query({
      query: graph.GET_PROPERTIES,
    }).then(results => {
      const properties = results.data.apt_snapshot_property;
      // Transform the data into the format used by the UI
      const out = properties?.length ? properties.map(fromReportGraph.property) : [];
      this.info('getProperties SUCCESS', out);
      return out;
    });
  }

  // Example of how to get data from the GraphQL API.
  // getUser(email) {
  //   this.debug('getUser', email);
  //
  //   const variables = {email};
  //
  //   return this.client.query({
  //     query: graph.GET_USER,
  //     variables,
  //   }).then(results => {
  //     const user = results.data.users[0];
  //     // Transform the data into the format used by the UI
  //     const out = user ? fromGraph.user(user) : null;
  //     this.info('getUser SUCCESS', out);
  //     return out;
  //   });
  // }
}

export const ReportAPIContext = React.createContext(undefined);
export const ReportAPIProvider = ReportAPIContext.Provider;

export function useReportAPI() {
  return React.useContext(ReportAPIContext);
}
