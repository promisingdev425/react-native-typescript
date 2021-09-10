import { nowInMinutes, addMonths, formatDate } from './date'

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
    expect(formatDate(nowInMinutes())).toEqual(formatDate(new Date()))
  })

  it('should test locales', () => {
    expect(formatDate(new Date('2021-09-30'), 'zh-CN')).toEqual('2021年9月')
    expect(formatDate(new Date('2021-09-30'), ['zh_cn', 'it_IT'])).toEqual(
      'Sep 2021',
    )
    expect(formatDate(new Date('2021-09-30'), ['zh_cn', 'es-ES'])).toEqual(
      'Sep 2021',
    )
  })
})
