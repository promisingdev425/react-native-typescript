- transform
 - <a href="#fromreportgraph">fromReportGraph</a>
 - <a href="#toreportgraph">toReportGraph</a>
 - <a href="#collapsenestedrelationships">collapseNestedRelationships</a>
 - <a href="#preparenestedrelationships">prepareNestedRelationships</a>
- <a href="#makereportapicacheclient">makeReportAPICacheClient</a>

<br/><br/>
## fromReportGraph

`fromReportGraph` allows you to transform data from
the relational data model returned from GraphQL into
the application domain model used in the client code.
This sheilds the application from relational data changes
that don't affect the application's logic or data structure.





#### Defined in
- *[transform/fromReportGraph.ts:16](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/transform/fromReportGraph.ts#L16)*

<br/>## toReportGraph

`toReportGraph` allows transforming data
from the application domain model to
the relational data model used in GraphQL.





#### Defined in
- *[transform/toReportGraph.ts:10](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/transform/toReportGraph.ts#L10)*

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
- *[transform/util.ts:47](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/transform/util.ts#L47)*

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
- *[transform/util.ts:16](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/transform/util.ts#L16)*

<br/>## makeReportAPICacheClient


Make an apollo cache client that can be used to cache results so they're
not always requested from the server.





#### Returns
`InMemoryCache`


#### Defined in
- *[cache.ts:7](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/services/report-api/cache.ts#L7)*

<br/>