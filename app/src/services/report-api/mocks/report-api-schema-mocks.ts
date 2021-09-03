import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';

import { createGraphClientMock } from '../../graphql-utils/mocks';

// import { generate } from './graph-generate';

import schemaDefinition from '~/graphql-schema.graphql';

/**
 * Generates a mock client that will auto generate fake data
 * for requests against it using the mocks defined in `graphql-mocks.js`.
 * Used to serve a static version of the site for development
 * and can be used to generate data for the storybook.
 *
 * You can get an errorLink that will trigger the global
 * error handler by importing `createErrorLink` from `Home.jsx`.
 */
export function createReportAPIClientMock(
  /** Apollo Error Link instance */
  errorLink,
  /** Apollo Cache Link instance */
  cache,
  /** Any additional mocks you wish to merge into the default mocks */
  additionalMocks,
  /** Options to pass to the generator methods (ie. graph-generate) */
  generatorOptions,
  /** Whether to perform verbose logging */
  debug = false,
) {
  const mocks = createGraphMocks(generatorOptions);
  const schema = makeExecutableSchema({ typeDefs: schemaDefinition });
  addMocksToSchema({
    schema,
    mocks: {
      ...mocks,
      ...additionalMocks
    }
  });

  return createGraphClientMock(schema, errorLink, cache, debug);
};

/**
 * Create the mock definitions based on the given options.
 * @see https://www.graphql-tools.com/docs/mocking#mocking-custom-scalar-types
 */
export function createGraphMocks(options = {}) {
  // Generator options to pass to `generate` method calls.
  options = {includeId: true, ...options};

  return {
    query_root: () => ({
    }),

    mutation_root: () => ({
    }),

    bigint: () => Math.floor(Math.random() * 10000),
  }
}
