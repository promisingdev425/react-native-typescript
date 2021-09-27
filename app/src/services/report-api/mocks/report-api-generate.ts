import faker from 'faker'

let _id = 0
const id = (includeId = true) => {
  // The database uses uuids instead of auto-incrementing
  // ids so we'll fake that by returning a String.
  if (includeId) return String(++_id)
}

/**
 * `generate` provides factories for generating each
 * of the types defined in our Report API schema (`~/graphql-report-schema.graphql`).
 *
 * You can use the `generate` factories in your tests,
 * in your Storybook stories and in the Apollo mocks
 * (defined in `report-api-schema-mocks.ts`).
 * The shape of the values returned by the `generate`
 * factories match the shape returned by the Report API
 * GraphQL schema. This is great when mocking GraphQL
 * responses but less useful if your tests/stories do not
 * hit the Report API Service class (this will be the case
 * everywhere except integration tests). In those cases,
 * you should pass the data returned by `generate` through one of the
 * `fromReportGraph` transform methods in order to
 * get the same shape of data returned by the Report API Service.
 *
 * ```js
 * import { transform } from '~/services/report-api';
 * import { generate } from '~/services/report-api/mocks';
 *
 * // Create a property object as it is returned by GraphQL
 * const graphQLProperty = generate.apt_snapshot_property();
 *
 * // Transform the property object for use in the application
 * const property = transform.property(graphQLProperty);
 *
 * // Now you can pass the property object directly to
 * // your components.
 * ```
 *
 * ### Developer Notes
 *
 * Each of the factories on this object should match the name
 * of a type definition in the `~/graphql-report-schema.graphql`
 * file and should return a value matching that type.
 */
export const generate = {
  // Use the same method as other ids
  uuid: () => id(),

  property_name: () => faker.company.companyName(),

  apt_snapshot_property: ({
    includeId = false,

    name = generate.property_name(),
    ownership_group_id = id(includeId),
    property_id = id(includeId),
  } = {}) => ({ name, ownership_group_id, property_id }),
}
