import React, { useRef, useEffect } from 'react'
import { Modal, Animated, Easing, ViewStyle, ViewProps } from 'react-native'
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
export interface IListSheet extends ViewProps {
  open: boolean
  title?: string
  options: IOptionData[]
  itemHeight?: number
  isHideAfterChoose?: boolean
  onChange?: (data: IOptionData) => void
  onChangeAfterHide: (data: IOptionData) => void
}

/**
 * `<ListSheet>`
 *
 * @param {object} props
 * @return {React.ReactNode}
 */
export const ListSheet: React.FC<IListSheet> = ({
  open,
  title,
  options,
  itemHeight = 48,
  isHideAfterChoose = false,
  onChange,
  onChangeAfterHide,
  ...rest
}) => {
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

  /* istanbul ignore next */
  const handleCancel = () => {
    hide(null)
  }

  const handleHideCallback = (data) => () => {
    onChangeAfterHide(data)
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
    ]).start(handleHideCallback(data))

    if (data && onChange) {
      onChange(data)
    }
  }

  const handleChange = (option) => {
    isHideAfterChoose ? hide(option) : onChange && onChange(option)
  }

  useEffect(() => {
    if (open) {
      showSheet()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

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
      visible={open}
      animationType="none"
      onRequestClose={handleCancel}
      transparent
    >
      <Container {...rest}>
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
