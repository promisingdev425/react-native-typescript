- <a href="#generate">generate</a>
- <a href="#createreportapiclientmock">createReportAPIClientMock</a>

<br/><br/>
## generate

`generate` provides factories for generating each
of the types defined in our Report API schema (`~/graphql-report-schema.graphql`).

You can use the `generate` factories in your tests,
in your Storybook stories and in the Apollo mocks
(defined in `report-api-schema-mocks.ts`).
The shape of the values returned by the `generate`
factories match the shape returned by the Report API
GraphQL schema. This is great when mocking GraphQL
responses but less useful if your tests/stories do not
hit the Report API Service class (this will be the case
everywhere except integration tests). In those cases,
you should pass the data returned by `generate` through one of the
`fromReportGraph` transform methods in order to
get the same shape of data returned by the Report API Service.

```js
import { transform } from '~/services/report-api';
import { generate } from '~/services/report-api/mocks';

// Create a property object as it is returned by GraphQL
const graphQLProperty = generate.apt_snapshot_property();

// Transform the property object for use in the application
const property = transform.property(graphQLProperty);

// Now you can pass the property object directly to
// your components.
```

### Developer Notes

Each of the factories on this object should match the name
of a type definition in the `~/graphql-report-schema.graphql`
file and should return a value matching that type.



`any`

#### Defined in
- *[report-api-generate.ts:47](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/mocks/report-api-generate.ts#L47)*

<br/>## createReportAPIClientMock


Creates a mock Apollo client that will auto generate fake data
for requests against it using the mocks returned by `createGraphMocks`.
You can use this function to create Apollo clients that
return mock data during testing, the mock server or Storybook.

For information on how the schema mocks, see
https://www.graphql-tools.com/docs/mocking#mocking-custom-scalar-types



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| __namedParameters |  | `{}` |


#### Returns
`ApolloClient`


#### Defined in
- *[report-api-schema-mocks.ts:24](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/mocks/report-api-schema-mocks.ts#L24)*

<br/>