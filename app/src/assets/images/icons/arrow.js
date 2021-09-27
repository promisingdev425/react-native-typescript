import React, { forwardRef, memo } from 'react'
import { SvgXml } from 'react-native-svg'

const CalendarIcon = (props, svgRef) => {
  // eslint-disable-next-line react/prop-types
  const { color } = props
  const svgMarkup = `<svg
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>applications-icon</title>
    <defs>
      <linearGradient
        x1="6.08962809%"
        y1="12.1919573%"
        x2="72.8604997%"
        y2="65.1554274%"
        id="linearGradient-1"
      >
        <stop stop-color="#FF7F40" offset="0%"></stop>
        <stop stop-color="#FF7F40" offset="0.0443892045%"></stop>
        <stop stop-color="#F44C7F" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g
      id="Design"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Summary" transform="translate(-32.000000, -626.000000)">
        <g
          id="applications-icon"
          transform="translate(32.000000, 626.000000)"
        >
          <rect
            id="base-copy"
            fill="${color || '#FF7F40'}"
            opacity="0.100000001"
            x="0"
            y="0"
            width="32"
            height="32"
            rx="8"
          ></rect>
          <g
            id="property-agreement"
            transform="translate(10.000000, 10.000000)"
            fill="url(#linearGradient-1)"
            fill-rule="nonzero"
          >
            <path
              d="M10.96875,0 C11.1931157,0 11.375,0.18188432 11.375,0.40625 L11.375,0.40625 L11.375,8.2330625 L9.75,7.15 L6.5,9.3153125 L6.5,13 L0.40625,13 C0.18188432,13 0,12.8181157 0,12.59375 L0,12.59375 L0,0.40625 C0,0.18188432 0.18188432,0 0.40625,0 L0.40625,0 Z M9.75,8.125 L12.1875,9.75 L12.1875,12.59375 C12.1875,12.8181157 12.0056157,13 11.78125,13 L11.78125,13 L10.5625,13 L10.5625,11.375 L8.9375,11.375 L8.9375,13 L7.71875,13 C7.49438432,13 7.3125,12.8181157 7.3125,12.59375 L7.3125,12.59375 L7.3125,9.75 L9.75,8.125 Z M5.6875,8.53125 L2.4375,8.53125 L2.4375,9.34375 L5.6875,9.34375 L5.6875,8.53125 Z M8.9375,6.09375 L2.4375,6.09375 L2.4375,6.90625 L8.9375,6.90625 L8.9375,6.09375 Z M8.9375,3.65625 L2.4375,3.65625 L2.4375,4.46875 L8.9375,4.46875 L8.9375,3.65625 Z"
              id="Combined-Shape"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>`

  const SvgImage = () => <SvgXml xml={svgMarkup} ref={svgRef} {...props} />

  return <SvgImage />
}

const ForwardRef = forwardRef(CalendarIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
