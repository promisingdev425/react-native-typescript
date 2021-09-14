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
  locale?: string | Array<string>,
  options?: Intl.DateTimeFormatOptions,
) => {
  options = options || {
    year: 'numeric',
    month: 'short',
  }
  // if locale is not defined, set it as an empty array
  if (!locale) locale = []

  // standardize locale to an array format
  locale = typeof locale === 'string' ? [locale] : locale

  try {
    return Intl.DateTimeFormat(locale, options).format(date)
  } catch {
    // date format with `en-US` locale as a fallback language
    return Intl.DateTimeFormat('en-US', options).format(date)
  }
}

export const nowInMinutes = () => {
  const date = new Date().getTime()
  return new Date(date - (date % 60000))
}
