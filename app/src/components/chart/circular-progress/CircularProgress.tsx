import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { useTheme } from '~/theme'

import { ICircularProgress } from '../types'
import { Title } from '../../core'

import { Container, Overview, ChartView } from './styles'

/**
 * `<CircularProgress>`
 */
export const CircularProgress: React.FC<ICircularProgress> = ({
  width = 250,
  progress,
  strokeWidth = 30,
  activeColor = 'brandPink',
  backgroundColor = 'lightGray',
  isFull,
  ...rest
}) => {
  const { colors } = useTheme()

  /* istanbul ignore next */
  const GradientFill = () => (
    <Defs key={'default'}>
      <LinearGradient
        id="default"
        x1={isFull ? '50%' : '0'}
        y1={isFull ? '100%' : '50%'}
        x2={isFull ? '50%' : '100%'}
        y2={isFull ? '0' : '50%'}
      >
        <Stop offset="0%" stopColor={colors.brandOrange} />
        <Stop offset="100%" stopColor={colors.brandPink} />
      </LinearGradient>
    </Defs>
  )

  return (
    <Container width={width} isFull={isFull}>
      <ChartView>
        <ProgressCircle
          style={{ width: Number(width), height: Number(width) }}
          progress={progress}
          progressColor="url(#default)"
          backgroundColor={colors[backgroundColor]}
          strokeWidth={strokeWidth}
          startAngle={isFull ? undefined : -Math.PI * 0.5}
          endAngle={isFull ? undefined : Math.PI * 0.5}
          cornerRadius={0}
        >
          <GradientFill />
        </ProgressCircle>
      </ChartView>

      <Overview strokeWidth={strokeWidth}>
        <Title
          variant="header"
          accessibilityLabel="Progress Percentage"
          mt={isFull ? 0 : 'lg'}
        >
          {progress * 100} %
        </Title>
      </Overview>
    </Container>
  )
}
