import PickingService from '../../../services/picking'

const group = PickingService.forPlatform({
  ios: {
    sfProDisplay: 'SFProDisplay',
  },
  android: {
    sfProDisplay: 'SF-Pro-Display',
  },
})

const separator = PickingService.forPlatform({
  ios: {
    [group.sfProDisplay]: '-',
  },
  android: {
    [group.sfProDisplay]: '-',
  },
})

const style = {
  black: 'Black',
  blackItalic: 'BlackItalic',
  bold: 'Bold',
  boldItalic: 'BoldItalic',
  extraLight: 'ExtraLight',
  extraLightItalic: 'ExtraLightItalic',
  italic: 'Italic',
  light: 'Light',
  lightItalic: 'LightItalic',
  regular: 'Regular',
  semiBold: 'Semibold',
  semiBoldItalic: 'SemiboldItalic',
}

export default {
  style,
  group,
  separator,
}
