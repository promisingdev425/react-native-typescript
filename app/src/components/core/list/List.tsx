import React from 'react'
import { View } from 'react-native'

import { Container, Item, Dot } from './styles'

import { Text } from '../text'

export interface IList {
  /**
   * Children elements.
   */
  children: React.ReactNode
}

/**
 * `<List>` is a component similar to HTML ul elements.
 * You can add child elements which will automatically get formatted into the list style.
 */
export const List: React.FC<IList> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {children.map((item, index) => {
        return (
          <Item key={index}>
            <Dot></Dot>
            <View>{item}</View>
          </Item>
        )
      })}
    </Container>
  )
}
