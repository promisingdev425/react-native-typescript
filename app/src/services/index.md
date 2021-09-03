- graphql-utils
  - LoggingLink
    - <a href="#constructor">constructor</a>
  - <a href="#graphqlerrorhandler">graphQLErrorHandler</a>
  - <a href="#makegraphqlerrorlink">makeGraphQLErrorLink</a>
- report-api
  - transform
    - <a href="#fromreportgraph">fromReportGraph</a>
    - <a href="#toreportgraph">toReportGraph</a>
    - <a href="#collapsenestedrelationships">collapseNestedRelationships</a>
    - <a href="#preparenestedrelationships">prepareNestedRelationships</a>
  - mocks
    - <a href="#creategraphmocks">createGraphMocks</a>
    - <a href="#createreportapiclientmock">createReportAPIClientMock</a>
  - <a href="#makereportapicacheclient">makeReportAPICacheClient</a>
- auth
  - <a href="#useauthservice">useAuthService</a>

<br/><br/>
## graphQLErrorHandler


A global error handler used to handle GraphQL errors
before they are dispatched to individual GraphQL query
handlers. This method is called for each error with
parameters describing any GraphQL or network errors.



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| __namedParameters |  | *-* |


#### Returns
`void`


#### Defined in
- *[graphql-utils/errors.ts:11](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/graphql-utils/errors.ts#L11)*

<br/>## makeGraphQLErrorLink


Make an apollo-link-error instance that is configured to use the
global error handler.



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| onAuthFailure | () => `void` | *-* |


#### Returns
`ApolloLink`


#### Defined in
- *[graphql-utils/errors.ts:70](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/graphql-utils/errors.ts#L70)*

<br/>## fromReportGraph

`fromGraph` allows you to transform data from
the relational data model returned from GraphQL into
the application domain model used in the client code.
This sheilds the application from relational data changes
that don't affect the application's logic or data structure.





#### Defined in
- *[report-api/transform/fromReportGraph.ts:9](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/transform/fromReportGraph.ts#L9)*

<br/>## toReportGraph

`toCollectionGraph` allows transforming data
from the application domain model to
the relational data model used in GraphQL.





#### Defined in
- *[report-api/transform/toReportGraph.ts:9](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/transform/toReportGraph.ts#L9)*

<br/>## collapseNestedRelationships


Perform the inverse of `prepareNestedRelationships`.

```js
collapseNestedRelationships({foo: {data: {bar: 'baz'}}});
// -> {foo: {bar: 'baz'}}
```



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| original | `any` | *-* |


#### Returns
`any`


#### Defined in
- *[report-api/transform/util.ts:47](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/transform/util.ts#L47)*

<br/>## prepareNestedRelationships


Transform an object with nested object properties into
GraphQL relationships (ie, replace those properties with
a data property that points to the nested object).

```js
prepareNestedRelationships({foo: {bar: 'baz'}});
// -> {foo: {data: {bar: 'baz'}}}
```



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| original | `any` | *-* |


#### Returns
`any`


#### Defined in
- *[report-api/transform/util.ts:16](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/transform/util.ts#L16)*

<br/>## createGraphMocks


Create the mock definitions based on the given options.



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| options |  | `{}` |


#### Returns
`void`


#### Defined in
- *[report-api/mocks/report-api-schema-mocks.ts:48](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/mocks/report-api-schema-mocks.ts#L48)*

<br/>## createReportAPIClientMock


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
| generatorOptions | `any` | *-* |
| debug | `boolean` | `false` |


#### Returns
`ApolloClient`


#### Defined in
- *[report-api/mocks/report-api-schema-mocks.ts:19](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/mocks/report-api-schema-mocks.ts#L19)*

<br/>## makeReportAPICacheClient


Make an apollo cache client that can be used to cache results so they're
not always requested from the server.





#### Returns
`InMemoryCache`


#### Defined in
- *[report-api/cache.ts:7](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/cache.ts#L7)*

<br/>## useAuthService


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