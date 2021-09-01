import React, { forwardRef, memo } from 'react'

function TabBrowseActiveIcon(props, svgRef) {
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
      <title>browse active - icon</title>
      <defs>
        <linearGradient
          x1="37.6916726%"
          y1="26.12221%"
          x2="55.5489063%"
          y2="60.042042%"
          id="linearGradient-1"
        >
          <stop stopColor={`${color || '#FF7F40'}`} offset="0%" />
          <stop stopColor={`${color || '#F44C7F'}`} offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Design"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Browse"
          transform="translate(-177.000000, -735.000000)"
          fill="url(#linearGradient-1)"
          fillRule="nonzero"
        >
          <path
            d="M182.115606,745.168457 C184.663946,745.168457 186.764044,743.060059 186.764044,740.503418 C186.764044,737.963379 184.663946,735.84668 182.115606,735.84668 C179.534063,735.84668 177.442267,737.963379 177.442267,740.503418 C177.442267,743.060059 179.534063,745.168457 182.115606,745.168457 Z M193.886114,745.168457 C196.434454,745.168457 198.534552,743.060059 198.534552,740.503418 C198.534552,737.963379 196.434454,735.84668 193.886114,735.84668 C191.304571,735.84668 189.212774,737.963379 189.212774,740.503418 C189.212774,743.060059 191.304571,745.168457 193.886114,745.168457 Z M182.115606,756.175293 C184.663946,756.175293 186.764044,754.066895 186.764044,751.510254 C186.764044,748.970215 184.663946,746.853516 182.115606,746.853516 C179.534063,746.853516 177.442267,748.970215 177.442267,751.510254 C177.442267,754.066895 179.534063,756.175293 182.115606,756.175293 Z M193.886114,756.175293 C196.434454,756.175293 198.534552,754.066895 198.534552,751.510254 C198.534552,748.970215 196.434454,746.853516 193.886114,746.853516 C191.304571,746.853516 189.212774,748.970215 189.212774,751.510254 C189.212774,754.066895 191.304571,756.175293 193.886114,756.175293 Z"
            id="browse-active---icon"
          />
        </g>
      </g>
    </svg>
  )

  return <SvgImage />
}

const ForwardRef = forwardRef(TabBrowseActiveIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
