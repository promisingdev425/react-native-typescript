export const addMonths = (date: Date, months: number) => {
  const d = date.getDate()
  date.setMonth(date.getMonth() + +months)
  if (date.getDate() !== d) {
    date.setDate(0)
  }
  return date
}

export const formatDate = (
  date: Date,
  options?: Intl.DateTimeFormatOptions,
  locale?: string,
) => {
  options = options || {
    year: 'numeric',
    month: 'short',
  }
  locale = locale || 'en-US'

  return Intl.DateTimeFormat('en-US', options).format(date)
}

export const now = () => {
  const date = new Date().getTime()
  return new Date(date - (date % 60000))
}
