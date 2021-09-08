import React, { forwardRef, memo } from 'react'
import { SvgXml } from 'react-native-svg'

const CalendarIcon = (props, svgRef) => {
  // eslint-disable-next-line react/prop-types
  const { color } = props
  const svgMarkup = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16pt"
    height="18pt"
    viewBox="0 0 16 18"
    version="1.1"
  >
    <g id="surface1">
      <path
        fill="${color || '#F44C7F'}"
        d="M 5.285156 10.125 L 3.855469 10.125 C 3.621094 10.125 3.429688 9.933594 3.429688 9.703125 L 3.429688 8.296875 C 3.429688 8.066406 3.621094 7.875 3.855469 7.875 L 5.285156 7.875 C 5.519531 7.875 5.714844 8.066406 5.714844 8.296875 L 5.714844 9.703125 C 5.714844 9.933594 5.519531 10.125 5.285156 10.125 Z M 9.144531 9.703125 L 9.144531 8.296875 C 9.144531 8.066406 8.949219 7.875 8.714844 7.875 L 7.285156 7.875 C 7.050781 7.875 6.855469 8.066406 6.855469 8.296875 L 6.855469 9.703125 C 6.855469 9.933594 7.050781 10.125 7.285156 10.125 L 8.714844 10.125 C 8.949219 10.125 9.144531 9.933594 9.144531 9.703125 Z M 12.570312 9.703125 L 12.570312 8.296875 C 12.570312 8.066406 12.378906 7.875 12.144531 7.875 L 10.714844 7.875 C 10.480469 7.875 10.285156 8.066406 10.285156 8.296875 L 10.285156 9.703125 C 10.285156 9.933594 10.480469 10.125 10.714844 10.125 L 12.144531 10.125 C 12.378906 10.125 12.570312 9.933594 12.570312 9.703125 Z M 9.144531 13.078125 L 9.144531 11.671875 C 9.144531 11.441406 8.949219 11.25 8.714844 11.25 L 7.285156 11.25 C 7.050781 11.25 6.855469 11.441406 6.855469 11.671875 L 6.855469 13.078125 C 6.855469 13.308594 7.050781 13.5 7.285156 13.5 L 8.714844 13.5 C 8.949219 13.5 9.144531 13.308594 9.144531 13.078125 Z M 5.714844 13.078125 L 5.714844 11.671875 C 5.714844 11.441406 5.519531 11.25 5.285156 11.25 L 3.855469 11.25 C 3.621094 11.25 3.429688 11.441406 3.429688 11.671875 L 3.429688 13.078125 C 3.429688 13.308594 3.621094 13.5 3.855469 13.5 L 5.285156 13.5 C 5.519531 13.5 5.714844 13.308594 5.714844 13.078125 Z M 12.570312 13.078125 L 12.570312 11.671875 C 12.570312 11.441406 12.378906 11.25 12.144531 11.25 L 10.714844 11.25 C 10.480469 11.25 10.285156 11.441406 10.285156 11.671875 L 10.285156 13.078125 C 10.285156 13.308594 10.480469 13.5 10.714844 13.5 L 12.144531 13.5 C 12.378906 13.5 12.570312 13.308594 12.570312 13.078125 Z M 16 3.9375 L 16 16.3125 C 16 17.242188 15.230469 18 14.285156 18 L 1.714844 18 C 0.769531 18 0 17.242188 0 16.3125 L 0 3.9375 C 0 3.007812 0.769531 2.25 1.714844 2.25 L 3.429688 2.25 L 3.429688 0.421875 C 3.429688 0.191406 3.621094 0 3.855469 0 L 5.285156 0 C 5.519531 0 5.714844 0.191406 5.714844 0.421875 L 5.714844 2.25 L 10.285156 2.25 L 10.285156 0.421875 C 10.285156 0.191406 10.480469 0 10.714844 0 L 12.144531 0 C 12.378906 0 12.570312 0.191406 12.570312 0.421875 L 12.570312 2.25 L 14.285156 2.25 C 15.230469 2.25 16 3.007812 16 3.9375 Z M 14.285156 16.101562 L 14.285156 5.625 L 1.714844 5.625 L 1.714844 16.101562 C 1.714844 16.21875 1.8125 16.3125 1.929688 16.3125 L 14.070312 16.3125 C 14.1875 16.3125 14.285156 16.21875 14.285156 16.101562 Z M 14.285156 16.101562 "
      />
    </g>
  </svg>`

  const SvgImage = () => <SvgXml xml={svgMarkup} ref={svgRef} {...props} />

  return <SvgImage />
}

const ForwardRef = forwardRef(CalendarIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
