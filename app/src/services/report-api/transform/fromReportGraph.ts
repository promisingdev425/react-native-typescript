type Bag = {[key: string]: any};

export type Property = {
  id: string,
  name: string,
  ownershipGroupId: string,
}

/**
 * `fromReportGraph` allows you to transform data from
 * the relational data model returned from GraphQL into
 * the application domain model used in the client code.
 * This sheilds the application from relational data changes
 * that don't affect the application's logic or data structure.
 */
export const fromReportGraph = {
  property: (p: Bag = {}): Property => ({
    id: p.property_id,
    name: p.name,
    ownershipGroupId: p.ownership_group_id,
  }),
};
