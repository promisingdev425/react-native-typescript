import React, { useState } from 'react'
import styled from 'styled-components/native'
import { DateTime } from 'luxon'

import { CircularArrowIcon, CalendarIcon } from '~/assets/images'

import { Box, IconButton, Text } from '../../core'

export interface IDateSelect {
  onChange: (date: DateTime) => void
}

const Container = styled(Box)`
  width: 180px;
  display: flex;
  flex-direction: row;
`

const Selector = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

/**
 * `<DateSelect>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const DateSelect: React.FC<IDateSelect> = ({ onChange, ...rest }) => {
  const [date, setDate] = useState(DateTime.now().endOf('month'))

  const handlePrevPress = () => {
    const prevMonth = date.minus({ months: 1 })
    setDate(prevMonth)
    onChange(prevMonth)
  }

  const handleNextPress = () => {
    const nextMonth = date.plus({ months: 1 })
    setDate(nextMonth)
    onChange(nextMonth)
  }

  return (
    <Container {...rest}>
      <IconButton testID="date-select-prev" onPress={handlePrevPress}>
        <CircularArrowIcon />
      </IconButton>

      <Selector>
        <CalendarIcon size={16} />

        <Text
          fontSize="subtitle2"
          fontFamilyStyle="style.bold"
          lineHeight="21px"
          ml="xs"
        >
          {date.toFormat('LLL yyyy')}
        </Text>
      </Selector>

      <IconButton
        testID="date-select-next"
        onPress={handleNextPress}
        style={{ transform: [{ rotate: '180deg' }] }}
      >
        <CircularArrowIcon />
      </IconButton>
    </Container>
  )
}
