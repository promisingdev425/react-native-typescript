import { GridProps, AxisProps } from 'react-native-svg-charts'

import { IBox } from '../core'

interface ICommonProps {
  inset?: number
  strokeWidth?: number
  strokeColor?: string
}

export type ChartData = {
  value: number
  label: string
}

export interface IChart extends IBox, ICommonProps {
  title?: string
  height?: number
  numberOfTicks?: number
  gridColor?: string
  activeGridIndex?: number | undefined
  activeGridColor?: string | undefined
  values?: Array<ChartData>
}

export interface IDecorator extends ICommonProps {
  radius?: number
  fill?: string
  data?: Array<number>
  x?: (value: number) => number
  y?: (value: number) => number
}

export interface IGrid extends GridProps<number>, ICommonProps {
  activeIndex?: number
  activeColor?: string
  data?: Array<number>
}

export interface IAxis extends AxisProps<number>, ICommonProps {
  textSize?: 'label1' | 'label2' | 'label3'
  textColor?: string
}
