import { fromReportGraph } from './fromReportGraph'

describe('fromReportGraph', () => {
  it('property', () => {
    expect(fromReportGraph.property()).toEqual({
      id: undefined,
      name: undefined,
      ownershipGroupId: undefined,
    })

    expect(
      fromReportGraph.property({
        property_id: 'foo',
        name: 'bar',
        ownership_group_id: 'baz',
      }),
    ).toEqual({
      id: 'foo',
      name: 'bar',
      ownershipGroupId: 'baz',
    })
  })
})
