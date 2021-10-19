import React, { useState } from 'react'
import styled from 'styled-components/native'

import { Icons } from '~/assets'
import { nowInMinutes, addMonths, formatDate } from '~/utils/date'

import { Box, IBox, IconButton, Text } from '../../core'

export interface IDateSelect extends IBox {
  onChange: (date: Date) => void
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
  const [date, setDate] = useState(nowInMinutes())

  const handlePrevPress = () => {
    const prevMonth = addMonths(date, -1)
    setDate(prevMonth)
    onChange(prevMonth)
  }

  const handleNextPress = () => {
    const nextMonth = addMonths(date, 1)
    setDate(nextMonth)
    onChange(nextMonth)
  }

  return (
    <Container {...rest}>
      <IconButton
        accessibilityLabel="Prev Button"
        accessibilityHint="Get previous month"
        onPress={handlePrevPress}
        icon={<Icons.CircularArrow />}
      />

      <Selector>
        <Icons.Calendar />

        <Text
          fontSize="subtitle2"
          fontFamilyStyle="style.bold"
          lineHeight="21px"
          ml="xs"
        >
          {formatDate(date)}
        </Text>
      </Selector>

      <IconButton
        accessibilityLabel="Next Button"
        accessibilityHint="Get next month"
        onPress={handleNextPress}
        style={{ transform: [{ rotate: '180deg' }] }}
        icon={<Icons.CircularArrow />}
      />
    </Container>
  )
}
