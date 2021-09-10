import React from 'react'
import styled from 'styled-components/native'
import { Box } from '../box'
import { Title } from '../title'

export interface ICard {
  title?: string
  bg?: string
  children?: React.ReactNode
}

export const InnerCard = styled(Box).attrs((props: ICard) => ({
  bg: props.bg || 'white',
  borderRadius: 'sm',
  p: 'sm',
}))``

/**
 * `<Card>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const Card: React.FC<ICard> = ({ title, children, ...rest }) => {
  const titleEl = title && (
    <Title variant="section" mb="xs">
      {title}
    </Title>
  )

  return (
    <Box px="sm" py="md" {...rest}>
      {titleEl}

      <InnerCard>{children}</InnerCard>
    </Box>
  )
}
