import { StyleSheet } from 'react-native'

const barHeight = 25
const borderRadius = 4
const dotHeight = barHeight - 4
const dotInnerHeight = dotHeight * .35

export const styles = StyleSheet.create({

  container: {
    width: '100%',
  },

  /**
   * The minimum and maximum text at the top
   */
  top_text: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  top_text_minimum: {
    flex: 1,
  },
  top_text_maximum: {
  },

  /**
   * The black dividers between the regions
   */
  bar_dividers: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    top: -3,
  },
  bar_divider: {
    width: 2,
    height: barHeight + 6,
    backgroundColor: 'black',
  },
  bar_dividers_negative: {
    left: '33.33%',
  },
  bar_dividers_positive: {
    left: '66.66%',
    top: -barHeight - 6,
  },

  /**
   * The red, yellow and green regions
   */
  bar: {
    flexDirection: 'row',
  },
  bar_column: {
    width: '33.33%',
    height: barHeight,
  },
  bar_column_negative: {
    backgroundColor: 'red',
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  bar_column_neutral: {
    backgroundColor: 'yellow',
  },
  bar_column_positive: {
    backgroundColor: 'green',
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },

  /**
   * The dot that overlays the red, yellow and green regions
   */
  dot: {
    borderRadius: dotHeight / 2,
    width: dotHeight,
    height: dotHeight,
    backgroundColor: 'rgba(255,255,255,0.5)',
    top: -barHeight + 2,
    transform: [
      { translateX: -dotHeight / 2 }
    ]
  },
  dot_inner: {
    width: dotInnerHeight,
    height: dotInnerHeight,
    borderRadius: dotInnerHeight / 2,
    backgroundColor: 'white',
    top: '32.5%',
    left: '32.5%',
  },

  /**
   * The indicator below the bar that displays the value
   */
  indicator: {
    borderRadius: 2,
    backgroundColor: "black",
    width: 45,
    height: 20,
    top: -5,
    transform: [
      { translateX: -22.5 }
    ]
  },
  indicator_notch: {
    width: 10,
    height: 10,
    borderRadius: 1,
    backgroundColor: "black",
    transform: [
      { rotate: '45deg' }
    ],
    left: 17,
    top:-2
  },
  indicator_text: {
    textAlign:"center",
    top:3,
    position: "absolute",
    width: "100%"
  }
})
