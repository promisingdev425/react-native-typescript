import { toReportGraph } from './toReportGraph'

describe('toReportGraph', () => {
  it('property', () => {
    expect(toReportGraph.property()).toEqual({
      property_id: undefined,
      name: undefined,
      ownership_group_id: undefined,
    })

    expect(
      toReportGraph.property({
        id: 'foo',
        name: 'bar',
        ownershipGroupId: 'baz',
      }),
    ).toEqual({
      property_id: 'foo',
      name: 'bar',
      ownership_group_id: 'baz',
    })
  })
})
