import * as React from 'react'
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Path,
} from 'react-native-svg'
interface SVGRProps {
  title?: string
  titleId?: string
}

function SvgTabLeaderboardActive(
  { title, titleId, ...props }: SvgProps & SVGRProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <Defs>
        <LinearGradient
          x1="37.7%"
          y1="24.3%"
          x2="55.5%"
          y2="60.8%"
          id="tabLeaderboardActive_svg__a"
        >
          <Stop stopColor="#FF7F40" offset="0%" />
          <Stop stopColor="#F44C7F" offset="100%" />
        </LinearGradient>
      </Defs>
      <Path
        d="M274 683v5c0 2.582 2.005 5 5.177 5a4.98 4.98 0 003.31 3.492c-.222 1.171-.635 2.638-1.403 4.008H279v2.5h10v-2.5h-2.084c-.768-1.37-1.181-2.837-1.404-4.008a4.98 4.98 0 003.311-3.492c3.162 0 5.177-2.41 5.177-5v-5h-20zm2.5 5v-2.5h2.5v5a2.503 2.503 0 01-2.5-2.5zm15 0c0 1.379-1.122 2.5-2.5 2.5v-5h2.5v2.5z"
        transform="translate(-274 -683)"
        fill="url(#tabLeaderboardActive_svg__a)"
        fillRule="nonzero"
      />
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgTabLeaderboardActive)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
