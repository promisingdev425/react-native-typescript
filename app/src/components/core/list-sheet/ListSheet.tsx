import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { Modal, Animated, Easing, ViewStyle } from 'react-native'
import map from 'lodash/map'

import { Title } from '../title'
import { IOptionData, Option } from './option'
import {
  getMaxHeight,
  getBottomSpace,
  Container,
  Overlay,
  OverlayBackground,
  Body,
  Header,
  Content,
} from './styles'

type AnimatedViewStyle = Animated.WithAnimatedValue<ViewStyle>

type IListSheetRef = {
  show?: () => void
}
export interface IListSheet {
  title?: string
  options: IOptionData[]
  itemHeight?: number
  onChange: (data: IOptionData) => void
}

/**
 * `<ListSheet>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
const ListSheetComponent: React.ForwardRefRenderFunction<
  IListSheetRef,
  IListSheet
> = (
  { title, options, itemHeight = 48, onChange, ...rest },
  ref,
): React.ReactElement => {
  const [visible, setVisible] = useState(false)
  let isScrollEnabled = false

  const getSheetHeight = () => {
    const header = 60
    const contentHeight = itemHeight * options.length
    const bottomSpace = getBottomSpace(rest)
    const height = header + contentHeight + bottomSpace
    const maxHeight = getMaxHeight(rest)

    isScrollEnabled = height > maxHeight

    return height
  }

  let translateY = getSheetHeight()
  const sheetAnimation = useRef(new Animated.Value(translateY)).current
  const overlayAnimation = useRef(new Animated.Value(0)).current

  const showSheet = () => {
    Animated.parallel([
      Animated.timing(sheetAnimation, {
        toValue: 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnimation, {
        toValue: 1,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start()
  }

  const handleCancel = () => {
    hide(null)
  }

  const handleHideCallback = () => {
    setVisible(false)
  }

  const hide = (data) => {
    Animated.parallel([
      Animated.timing(sheetAnimation, {
        toValue: translateY,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(handleHideCallback)

    if (data) {
      onChange(data)
    }
  }

  const handleChange = (option) => {
    hide(option)
  }

  useEffect(() => {
    if (visible) {
      showSheet()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  useImperativeHandle(ref, () => ({
    show() {
      setVisible(true)
    },
  }))

  const bodyStyle: AnimatedViewStyle = {
    height: translateY,
    transform: [{ translateY: sheetAnimation }],
  }
  const opacityInterpolation = overlayAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.4],
  })
  const overlayStyle: AnimatedViewStyle = { opacity: opacityInterpolation }

  return (
    <Modal
      visible={visible}
      animationType="none"
      onRequestClose={handleCancel}
      transparent
    >
      <Container>
        <Overlay onPress={handleCancel}>
          <OverlayBackground
            as={Animated.View}
            style={overlayStyle as ViewStyle}
          />
        </Overlay>

        <Body as={Animated.View} style={bodyStyle as ViewStyle}>
          <Header>
            <Title variant="section">{title}</Title>
          </Header>

          <Content scrollEnabled={isScrollEnabled}>
            {map(options, (option, index) => (
              <Option
                key={option.value}
                option={option}
                onPress={handleChange}
                height={48}
                isLast={index === options.length - 1}
              />
            ))}
          </Content>
        </Body>
      </Container>
    </Modal>
  )
}

export const ListSheet = forwardRef(ListSheetComponent)
