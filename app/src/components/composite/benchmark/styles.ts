import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import { Box, Text } from '../../core'

import { getColor, getFontSize } from '~/theme'

const barHeight = 28
const borderRadius = 4
const indicatorWidth = 48

export const Container = styled(Box)`
  width: 100%;
`

export const Indicator = styled(Box).attrs((props) => {
  const left = props.indicatorPosition * 100 + '%'
  return {
    backgroundColor: getColor('black')(props),
    borderRadius: 2,
    width: indicatorWidth,
    height: 24,
    top: -5,
    left: left,
    marginBottom: 10,
  }
})`
  transform: translateX(${-indicatorWidth / 2}px);
`

export const IndicatorNotch = styled(Box).attrs((props) => {
  return {
    backgroundColor: getColor('black')(props),
    width: 15,
    height: 15,
    borderRadius: 1,
    left: (indicatorWidth - 18) / 2,
    bottom: -7,
    position: 'absolute',
  }
})`
  transform: rotateZ(45deg) rotateY(60deg);
`

export const IndicatorText = styled(Text).attrs((props) => {
  return {
    color: getColor('white')(props),
    fontSize: getFontSize('h3')(props),
    textAlign: 'center',
    paddingTop: 2,
    position: 'absolute',
    width: '100%',
    zIndex: 3,
    fontFamilyStyle: 'style.bold',
  }
})``

export const ColorBar = styled(Box).attrs({
  height: barHeight,
})`
  flex-direction: row;
  width: 100%;
`

export const ColorBarFail = styled(LinearGradient).attrs((props) => {
  return {
    colors: [getColor('clear')(props), getColor('darkRed')(props)],
    start: [0.1, 0.45],
    end: [0.9, 0.55],
  }
})`
  width: 25%;
`

export const ColorBarNegative = styled(Box).attrs((props) => {
  return {
    backgroundColor: getColor('negative')(props),
    width: '25%',
  }
})``

export const ColorBarWarning = styled(Box).attrs((props) => {
  return {
    backgroundColor: getColor('warning')(props),
    width: '25%',
  }
})``

export const ColorBarPositive = styled(Box).attrs((props) => {
  return {
    backgroundColor: getColor('positive')(props),
    width: '25%',
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  }
})``

export const ColorBarLabel = styled(Text).attrs((props) => {
  return {
    color: getColor('black')(props),
    fontSize: getFontSize('body2')(props),
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    top: '50%',
    position: 'absolute',
    fontFamilyStyle: 'style.bold',
  }
})`
  transform: translateY(-8px);
`

export const Dividers = styled(Box).attrs({
  height: barHeight + 4,
  top: -barHeight - 2,
})`
  width: 100%;
  flexdirection: row;
`

export const DividerContainer = styled(Box)`
  height: 100%;
  width: 25%;
`

export const DividerShape = styled(Box).attrs((props) => {
  return {
    width: 2,
    backgroundColor: getColor('black')(props),
  }
})`
  height: 100%;
  alignself: flex-end;
`

export const DividerLabels = styled(Box).attrs({
  top: -barHeight + 5,
  left: 15,
})`
  flexdirection: row;
`

export const DividerLabel = styled(Text).attrs((props) => {
  return {
    color: getColor('black')(props),
    fontSize: getFontSize('body2')(props),
    fontFamilyStyle: 'style.bold',
  }
})`
  width: 25%;
  text-align: right;
`
