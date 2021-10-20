import { GridProps, AxisProps } from 'react-native-svg-charts'

import { IBox } from '../core'

interface ICommonProps {
  /**
   * Numeric value for for set visible space
   */
  inset?: number
  /**
   * Stroke/border width of svg element
   */
  strokeWidth?: number
  /**
   * Stroke/border color of svg element
   */
  strokeColor?: string
}

export type ChartData = {
  value: number
  label: string
}

export type PieChartData = ChartData & {
  color?: string
}

export enum ChartType {
  Bar,
  Line,
  Pie,
}

export interface IChart extends IBox, ICommonProps {
  /**
   * The title of the chart
   */
  title?: string
  /**
   * height can be a number or string to speicify chart's height
   */
  height?: number
  /**
   * Grid count under the chart
   */
  numberOfTicks?: number
  /**
   * Chart color
   */
  fillColor?: string
  /**
   * Grid line color
   */
  gridColor?: string
  /**
   * Active index to specify current cursor line
   */
  activeGridIndex?: number | undefined
  /**
   * Active grid color
   */
  activeGridColor?: string | undefined
  /**
   * Number array from chart values
   */
  data?: Array<number>
  /**
   * Total chart data given by user - pair of x-label, y-values
   */
  values?: Array<ChartData>
}

export interface IPieChart extends IBox {
  /**
   * The title of the chart
   */
  title?: string
  /**
   * height can be a number or string to speicify chart's height
   */
  height?: number
  /**
   * Chart data given by user
   */
  values?: Array<PieChartData>
}

export interface IDecorator extends ICommonProps {
  radius?: number
  fill?: string
  data?: Array<number>
  x?: (value: number) => number
  y?: (value: number) => number
}

export interface IGrid extends GridProps<number>, ICommonProps {
  /**
   * Active index to specify current cursor line
   */
  activeIndex?: number
  /**
   * Active grid color
   */
  activeColor?: string
  /**
   * One of Bar | Pie | Line
   */
  type?: ChartType
  /**
   * Total chart data given by user - pair of x-label, y-values
   */
  data?: Array<number>
}

export interface IAxis extends AxisProps<number>, ICommonProps {
  textSize?: 'label1' | 'label2' | 'label3'
  textColor?: string
  layoutWidth?: number
  layoutHeight?: number
}
