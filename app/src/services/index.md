- graphql-tools
  - LoggingLink
    - <a href="#constructor">constructor</a>
  - mocks
    - <a href="#creategraphclientmock">createGraphClientMock</a>
    - <a href="#createtestclient">createTestClient</a>
  - <a href="#graphqlerrorhandler">graphQLErrorHandler</a>
  - <a href="#makegraphqlerrorlink">makeGraphQLErrorLink</a>
- report-api
  - transform
    - <a href="#collapsenestedrelationships">collapseNestedRelationships</a>
    - <a href="#preparenestedrelationships">prepareNestedRelationships</a>
  - mocks
    - <a href="#createfoographclientmock">createFooGraphClientMock</a>
    - <a href="#creategraphmocks">createGraphMocks</a>
  - <a href="#makegraphqlcacheclient">makeGraphQLCacheClient</a>
- auth
  - <a href="#useauthservice">useAuthService</a>

<br/><br/>
## createGraphClientMock

▸ **createGraphClientMock**(`schema`, `errorLink`, `cache`): `ApolloClient`

Create a mock Apollo GraphQL client with the given mock schema.
This is useful in situations where you want to provide a full
schema with mocks (such as integration tests). This client
is automatically used during tests and the mock server.

```js
import { makeExecutableSchema } from '@graphql-tools/schema';
const schema = makeExecutableSchema({ typeDefs: schemaDefinition });

// Your mock schema generator here. See: https://www.graphql-tools.com/docs/mocking#customizing-mocks
const mocks = {
  query_root: () => ({}),
  mutation_root: () => ({}),
  // your scalar type mocks here...
};

addMocksToSchema({
  schema,
  mocks: {
    ...mocks,
    // You could merge in any additional mocks from somewhere else
    // if you needed.
    // ...additionalMocks
  }
});

return createGraphClientMock(errorLink, schema, cache);
```



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| schema | `any` | *-* |
| errorLink | `any` | *-* |
| cache | `InMemoryCache` | `...` |


#### Returns
`ApolloClient`


#### Defined in
- *[graphql-tools/mocks/graph-client.mock.ts:52](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/graphql-tools/mocks/graph-client.mock.ts#L52)*

<br/>
## createTestClient

▸ **createTestClient**(`mocks`, `errorLink`, `cache`): `ApolloClient`

Generate a mock client for use in tests. This is most
useful when you want to specifically control the responses
from the GraphQL mocks. The downside of this approach is
you must precisely define the request mocks to exactly
match all requests that will be made.

You can pass an empty array in order to test the
loading state of a request.

More information about mocking can be found at:
https://www.apollographql.com/docs/react/development-testing/testing/#testing-loading-states

```js
const onAuthFailure = jest.fn();
const authToken = 'abc123';

// Create a service instance that will respond to specific requests.
const service = new GraphAPI(
   onAuthFailure,
   authToken,
   createTestClient([
     // Each item in this list should match a request that will be made.
     {
       // This request definition must match the GraphQL request query
       // and variables exactly.
       request: {
         query: GQL_QUERY,
         variables: {
           // ...variables must match the request exactly
         },
       },
       // The following properties are optional based on
       // the needs of your test.
       result: {
         data: {
           // ...your result data goes here
         },
       },
       // If you specify an error property, the request will
       // fail with the given error.
       error: new Error('your error here'),
     }
  ])
);
```

You can setup your client to hook into Apollo's global
error handler as follows:

```
import { makeGraphQLErrorLink } from '~/services';
// Create an Apollo Link that will hook into the global error handler.
const errorLink = makeGraphQLErrorLink(jest.fn());
// Pass the error link to your test client.
const apolloClient = createTestClient({}, errorLink);
```



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| mocks | `any` | *-* |
| errorLink | `any` | *-* |
| cache | `InMemoryCache` | `...` |


#### Returns
`ApolloClient`


#### Defined in
- *[graphql-tools/mocks/graph-client.mock.ts:138](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/graphql-tools/mocks/graph-client.mock.ts#L138)*

<br/>
## graphQLErrorHandler

▸ **graphQLErrorHandler**(`__namedParameters`): `void`

A global error handler used to handle GraphQL errors
before they are dispatched to individual GraphQL query
handlers.



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| __namedParameters | `Object` | *-* |


#### Returns
`void`


#### Defined in
- *[graphql-tools/errors.js:8](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/graphql-tools/errors.js#L8)*

<br/>
## makeGraphQLErrorLink

▸ **makeGraphQLErrorLink**(`onAuthFailure`): `any`

Make an apollo-link-error instance that is configured to use the
global error handler.



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| onAuthFailure | `any` | *-* |


#### Returns
`any`


#### Defined in
- *[graphql-tools/errors.js:53](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/graphql-tools/errors.js#L53)*

<br/>
## collapseNestedRelationships

▸ **collapseNestedRelationships**(`original`): `any`

Perform the inverse of `prepareNestedRelationships`.



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| original | `any` | *-* |


#### Returns
`any`


#### Defined in
- *[report-api/transform/util.js:40](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/transform/util.js#L40)*

<br/>
## prepareNestedRelationships

▸ **prepareNestedRelationships**(`original`): `any`

Create a new object from the original with any properties that are
objects converted into nested relationship objects (ie {data: value).

Ex:
```
  prepareNestedObjects({foo: {bar: 'baz'}}); // -> {foo: {data: {bar: 'baz'}}}
```



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| original | `any` | *-* |


#### Returns
`any`


#### Defined in
- *[report-api/transform/util.js:18](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/transform/util.js#L18)*

<br/>
## createFooGraphClientMock

▸ **createFooGraphClientMock**(`errorLink`, `cache`, `additionalMocks`, `entry`, `generatorOptions`): `ApolloClient`

Generates a mock client that will auto generate fake data
for requests against it using the mocks defined in `graphql-mocks.js`.
Used to serve a static version of the site for development
and can be used to generate data for the storybook.

You can get an errorLink that will trigger the global
error handler by importing `createErrorLink` from `Home.jsx`.



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| errorLink | `any` | *-* |
| cache | `any` | *-* |
| additionalMocks | `any` | *-* |
| entry | `any` | *-* |
| generatorOptions | `any` | *-* |


#### Returns
`ApolloClient`


#### Defined in
- *[report-api/mocks/graph-schema.mock.js:22](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/mocks/graph-schema.mock.js#L22)*

<br/>
## createGraphMocks

▸ **createGraphMocks**(`options`): `any`

Create the mock definitions based on the given options.



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| options | `any` | `{}` |


#### Returns
`any`


#### Defined in
- *[report-api/mocks/graph-schema.mock.js:48](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/mocks/graph-schema.mock.js#L48)*

<br/>
## makeGraphQLCacheClient

▸ **makeGraphQLCacheClient**(): `InMemoryCache`

Make an apollo cache client that can be used to cache results so they're
not always requested from the server.





#### Returns
`InMemoryCache`


#### Defined in
- *[report-api/cache.js:8](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/cache.js#L8)*

<br/>
## useAuthService

▸ **useAuthService**(`authService`): ``

This hook stores the user's authenticated state and provides
login, logout and forgot login callbacks. Internally it uses
an auth service to perform the authentication steps.



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| authService | `any` | *-* |


#### Returns
`void`


#### Defined in
- *[auth/useAuthService.js:12](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/auth/useAuthService.js#L12)*

<br/>

