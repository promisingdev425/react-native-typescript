import PickingService from '~/services/picking'

const group = PickingService.forPlatform({
  web: {
    sfProDisplay: 'SFProDisplay',
  },
  ios: {
    sfProDisplay: 'SFProDisplay',
  },
  android: {
    sfProDisplay: 'SF-Pro-Display',
  },
})

const separator = PickingService.forPlatform({
  web: {
    [group.sfProDisplay]: '-',
  },
  ios: {
    [group.sfProDisplay]: '-',
  },
  android: {
    [group.sfProDisplay]: '-',
  },
})

const style = {
  bold: 'Bold',
  light: 'Light',
  regular: 'Regular',
  semiBold: 'Semibold',
}

export default {
  style,
  group,
  separator,
}
