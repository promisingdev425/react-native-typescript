- <a href="#creategraphmocks">createGraphMocks</a>
- <a href="#createreportapiclientmock">createReportAPIClientMock</a>

<br/><br/>
## createGraphMocks


Create the mock definitions based on the given options.



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| options |  | `{}` |


#### Returns
`void`


#### Defined in
- *[report-api-schema-mocks.ts:48](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/mocks/report-api-schema-mocks.ts#L48)*

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
- *[report-api-schema-mocks.ts:19](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/mocks/report-api-schema-mocks.ts#L19)*

<br/>