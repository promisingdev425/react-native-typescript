import { now, addMonths, formatDate } from './date'

describe('Date Utils', function () {
  it('should test add Month working fine', () => {
    const date = Date.UTC(2021, 8, 1)
    expect(addMonths(new Date(date), 1)).toEqual(new Date(Date.UTC(2021, 9, 1)))
    expect(addMonths(new Date(date), 10)).toEqual(
      new Date(Date.UTC(2022, 6, 1)),
    )
    expect(addMonths(new Date(date), -1)).toEqual(
      new Date(Date.UTC(2021, 7, 1)),
    )
    expect(addMonths(new Date(date), -10)).toEqual(
      new Date(Date.UTC(2020, 10, 1)),
    )
  })

  it('should format date ', () => {
    expect(formatDate(new Date(Date.UTC(2021, 8, 10)))).toEqual('Sep 2021')
  })

  it('should show current time without seconds', () => {
    expect(formatDate(now())).toEqual(formatDate(new Date()))
  })
})
