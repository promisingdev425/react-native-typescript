import { getColor } from '../../../helpers'

export default {
  innerGradient: {
    bg: {
      color1: {
        primary: getColor('brandOrange'),
      },

      color2: {
        primary: getColor('brandPink'),
      },
    },
  },

  isPressed: {
    inner: {
      bg: {
        primary: getColor('brandPink'),
      },
    },
  },
}
