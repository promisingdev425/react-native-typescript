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
  getBottomSpace,
  getMaxHeight,
  Container,
  Overlay,
  OverlayBackground,
  Body,
  Header,
  Content,
} from './styles'

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
export const ListSheet: React.FC<IListSheet> = forwardRef(
  ({ title, options, itemHeight = 48, onChange, ...rest }, ref) => {
    const [visible, setVisible] = useState(false)
    let isScrollEnabled = false

    const getSheetHeight = () => {
      const header = 60
      const scrollContent = itemHeight * options.length
      const footer = getBottomSpace(rest, true)
      const height = header + scrollContent + footer

      const maxHeight = getMaxHeight(rest)

      isScrollEnabled = height > maxHeight

      return Math.min(height, maxHeight)
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
    }, [visible])

    useImperativeHandle(ref, () => ({
      show() {
        setVisible(true)
      },
    }))

    const bodyStyle: ViewStyle = {
      height: translateY,
      // transform: [{ translateY: sheetAnimation }],
    }
    /* const opacityInterpolation = overlayAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.4],
    })*/
    const overlayStyle: ViewStyle = { opacity: 1 /* opacityInterpolation */ }

    return (
      <Modal
        visible={visible}
        animationType="none"
        onRequestClose={handleCancel}
        transparent
        {...rest}
      >
        <Container>
          <Overlay onPress={handleCancel}>
            <OverlayBackground as={Animated.View} style={overlayStyle} />
          </Overlay>

          <Body as={Animated.View} style={bodyStyle}>
            <Header>
              <Title variant="section">{title}</Title>
            </Header>

            <Content scrollEnabled={isScrollEnabled}>
              {map(options, (option) => (
                <Option option={option} onPress={handleChange} height={48} />
              ))}
            </Content>
          </Body>
        </Container>
      </Modal>
    )
  },
)
