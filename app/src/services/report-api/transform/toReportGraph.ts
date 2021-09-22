type Bag = { [key: string]: any }

/**
 * `toReportGraph` allows transforming data
 * from the application domain model to
 * the relational data model used in GraphQL.
 *
 * @see fromReportGraph for transformations coming from GraphQL.
 */
export const toReportGraph = {
  property: (p: Bag = {}) => ({
    property_id: p.id,
    name: p.name,
    ownership_group_id: p.ownershipGroupId,
  }),
}
