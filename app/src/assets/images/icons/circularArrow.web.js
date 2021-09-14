import React, { forwardRef, memo } from 'react'

function CircularArrowIcon(props, svgRef) {
  // eslint-disable-next-line react/prop-types
  const { color } = props

  const SvgImage = () => (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <g
        id="Design"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Engagement" transform="translate(-97.000000, -251.000000)">
          <g id="Group-2" transform="translate(98.000000, 252.000000)">
            <g
              id="previous-icon"
              transform="translate(10.000000, 10.000000) scale(-1, 1) translate(-10.000000, -10.000000) "
            >
              <circle
                id="Base"
                stroke={color || '#F4F4F5'}
                cx="10"
                cy="10"
                r="10"
              ></circle>
              <polyline
                id="Path"
                stroke={color || '#D2D4DA'}
                stroke-linecap="round"
                stroke-linejoin="round"
                points="9.5 7 11.5 10 9.5 13"
              ></polyline>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )

  return <SvgImage />
}

const ForwardRef = forwardRef(CircularArrowIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
