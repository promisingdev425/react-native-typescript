- services
  - report-api
    - <a href="#reportapi">ReportAPI</a>
      - <a href="#constructor">constructor</a>
      - <a href="#client">client</a>
      - <a href="#clear">clear</a>
      - <a href="#debug">debug</a>
      - <a href="#error">error</a>
      - <a href="#getproperties">getProperties</a>
      - <a href="#info">info</a>
      - <a href="#warn">warn</a>
    - transform
      - <a href="#property">Property</a>
      - <a href="#fromreportgraph">fromReportGraph</a>
      - <a href="#toreportgraph">toReportGraph</a>
      - <a href="#collapsenestedrelationships">collapseNestedRelationships</a>
      - <a href="#preparenestedrelationships">prepareNestedRelationships</a>
    - <a href="#get_properties">GET_PROPERTIES</a>
    - <a href="#reportapicontext">ReportAPIContext</a>
    - <a href="#reportapiprovider">ReportAPIProvider</a>
    - <a href="#makereportapicacheclient">makeReportAPICacheClient</a>
    - <a href="#usereportapi">useReportAPI</a>


## ReportAPI Class

__Extends__
`ServiceBase`


<br/>

### new ReportAPI( __namedParameters )



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| __namedParameters | `ReportAPIOptions` | *-* |


#### Defined in
- *[services/report-api/report-api.ts:51](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/report-api.ts#L51)*

<br/>### ReportAPI.client


#### Defined in
- *[@types/thesoulfresh-utils.d.ts:3](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/@types/thesoulfresh-utils.d.ts#L3)*

<br/>### ReportAPI.clear


Clear the data cache (for example after logout).
Returns a promise that will resolve after the
cache has been cleared.

For more info, see:
https://www.apollographql.com/docs/react/caching/cache-interaction/#resetting-the-store






#### Defined in
- *[services/report-api/report-api.ts:94](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/report-api.ts#L94)*

<br/>### ReportAPI.debug




#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| args |  | *-* |


#### Defined in
- *[@types/thesoulfresh-utils.d.ts:5](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/@types/thesoulfresh-utils.d.ts#L5)*

<br/>### ReportAPI.error




#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| args |  | *-* |


#### Defined in
- *[@types/thesoulfresh-utils.d.ts:8](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/@types/thesoulfresh-utils.d.ts#L8)*

<br/>### ReportAPI.getProperties






#### Defined in
- *[services/report-api/report-api.ts:156](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/report-api.ts#L156)*

<br/>### ReportAPI.info




#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| args |  | *-* |


#### Defined in
- *[@types/thesoulfresh-utils.d.ts:6](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/@types/thesoulfresh-utils.d.ts#L6)*

<br/>### ReportAPI.warn




#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| args |  | *-* |


#### Defined in
- *[@types/thesoulfresh-utils.d.ts:7](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/@types/thesoulfresh-utils.d.ts#L7)*

<br/><br/>

## fromReportGraph

`fromReportGraph` allows you to transform data from
the relational data model returned from GraphQL into
the application domain model used in the client code.
This sheilds the application from relational data changes
that don't affect the application's logic or data structure.






#### Defined in
- *[services/report-api/transform/fromReportGraph.ts:16](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/transform/fromReportGraph.ts#L16)*

<br/>
## toReportGraph

`toReportGraph` allows transforming data
from the application domain model to
the relational data model used in GraphQL.


__See:__ fromReportGraph for transformations coming from GraphQL. <br/>




#### Defined in
- *[services/report-api/transform/toReportGraph.ts:10](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/transform/toReportGraph.ts#L10)*

<br/>
## collapseNestedRelationships

  ▸ **collapseNestedRelationships**(`original`) => `any`

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
- *[services/report-api/transform/util.ts:47](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/transform/util.ts#L47)*

<br/>
## prepareNestedRelationships

  ▸ **prepareNestedRelationships**(`original`) => `any`

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
- *[services/report-api/transform/util.ts:16](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/transform/util.ts#L16)*

<br/>

## GET_PROPERTIES



`DocumentNode`

#### Defined in
- *[services/report-api/report-api-definitions.ts:40](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/report-api-definitions.ts#L40)*

<br/>
## ReportAPIContext



`Context`

#### Defined in
- *[services/report-api/report-api.ts:189](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/report-api.ts#L189)*

<br/>
## ReportAPIProvider



`Provider`

#### Defined in
- *[services/report-api/report-api.ts:190](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/report-api.ts#L190)*

<br/>
## makeReportAPICacheClient

  ▸ **makeReportAPICacheClient**() => `InMemoryCache`

Make an apollo cache client that can be used to cache results so they're
not always requested from the server.






#### Returns
`InMemoryCache` 


#### Defined in
- *[services/report-api/cache.ts:7](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/cache.ts#L7)*

<br/>
## useReportAPI

  ▸ **useReportAPI**() => `any`





#### Returns
`any` 


#### Defined in
- *[services/report-api/report-api.ts:192](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/services/report-api/report-api.ts#L192)*

<br/>

