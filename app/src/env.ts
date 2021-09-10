import {
  VERBOSE,
  MOCKS,
  AUTH_DOMAIN,
  AUTH_CLIENT_ID,
  REPORT_GRAPH_API,
} from '@env';

/**
 * The `env` object allows access to the
 * environment variables from the `.env` files,
 * browser location and cookies. It also
 * allows us to coerce the type of environment
 * variables which are strings by default.
 *
 * NOTE: When adding new environment variables,
 * you'll need to add them to all of the following
 * files:
 * - `src/env.ts` (this file)
 * - `src/@types/env.d.ts`
 * - `.env` (and other associated environment files)
 */
/* istanbul ignore next: not much here */
export const env = {
  get verbose() {
    return VERBOSE === 'true';
  },

  mocks: MOCKS,
  authDomain: AUTH_DOMAIN,
  authClientId: AUTH_CLIENT_ID,
  reportGraphAPI: REPORT_GRAPH_API,
}
