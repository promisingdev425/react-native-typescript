// Unfortunately, any environment variables specified
// in .env files will need to be defined here.
// NOTE: After defining variables here, don't
// forget to expose them through `src/env.ts`
declare module '@env' {
  export const MOCKS: string
  export const VERBOSE: string
  export const AUTH_DOMAIN: string
  export const AUTH_CLIENT_ID: string
  export const REPORT_GRAPH_API: string
}
