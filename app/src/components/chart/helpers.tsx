import React from 'react'
import { G, Circle, Line } from 'react-native-svg'

import { IDecorator, IGrid } from './types'

/* istanbul ignore next */
export const CircleDecorator = ({
  radius = 4,
  fill = 'white',
  strokeColor = '#000',
  strokeWidth = 2,
  data,
  x,
  y,
}: IDecorator) => {
  return (
    <>
      {data.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill={fill}
        />
      ))}
    </>
  )
}

/* istanbul ignore next */
export const Grid = ({
  x,
  y,
  data,
  ticks,
  strokeColor,
  activeIndex,
  activeColor,
}: IGrid) => (
  <G>
    {ticks.map((tick: number) => (
      <Line
        key={tick}
        x1={10}
        x2="100%"
        y1={y(tick)}
        y2={y(tick)}
        stroke={strokeColor}
        transform="translate(-5, 0)"
      />
    ))}
    {data.map((value: number, index: number) => (
      <Line
        key={index}
        y1={'0%'}
        y2={'100%'}
        x1={x(index)}
        x2={x(index)}
        transform="translate(0, 5)"
        stroke={index === activeIndex ? activeColor : strokeColor}
        strokeDasharray={
          index === activeIndex || index === 0 || index === data.length - 1
            ? 0
            : 4
        }
      />
    ))}
  </G>
)

export const getMaxValue = (numbers: Array<number>) => {
  const maxValue = Math.max(...numbers)
  const digits = Math.floor(Math.log10(maxValue))
  const units = Math.pow(10, digits)

  return Math.ceil(maxValue / units) * units
}
