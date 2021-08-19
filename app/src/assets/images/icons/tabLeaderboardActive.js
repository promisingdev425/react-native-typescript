import React, { forwardRef, memo } from 'react'
import { SvgXml } from 'react-native-svg'

function TabLeaderboardActiveIcon(props, svgRef) {
  const color = props.color
  const svgMarkup = `<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>leaderboard active - icon</title>
    <defs>
        <linearGradient x1="37.6916726%" y1="24.2945099%" x2="55.5489063%" y2="60.8106995%" id="linearGradient-1">
            <stop stop-color="${color || '#FF7F40'}" offset="0%"></stop>
            <stop stop-color="${color || '#F44C7F'}" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Browse" transform="translate(-274.000000, -683.000000)" fill="url(#linearGradient-1)" fill-rule="nonzero">
            <path d="M274,683 L274,688 C274,690.581847 276.004608,693 279.176773,693 C279.607224,694.661835 280.863327,695.973251 282.487702,696.491821 C282.264999,697.663239 281.852478,699.130447 281.084045,700.5 L279,700.5 L279,703 L289,703 L289,700.5 L286.915955,700.5 C286.147522,699.130447 285.735001,697.663239 285.512299,696.491821 C287.136673,695.973251 288.392777,694.661835 288.823227,693 C291.984925,693 294,690.589726 294,688 L294,683 L274,683 Z M276.5,688 L276.5,685.5 L279,685.5 L279,690.5 C277.621826,690.5 276.5,689.378784 276.5,688 Z M291.5,688 C291.5,689.378784 290.378174,690.5 289,690.5 L289,685.5 L291.5,685.5 L291.5,688 Z" id="leaderboard-active---icon"></path>
        </g>
    </g>
  </svg>`

  const SvgImage = () => <SvgXml xml={svgMarkup} ref={svgRef} {...props} />

  return <SvgImage />;
}

const ForwardRef = forwardRef(TabLeaderboardActiveIcon)
const MemoForwardRef = memo(ForwardRef)

export default MemoForwardRef
