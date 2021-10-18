import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
interface SVGRProps {
  title?: string
  titleId?: string
}

function SvgTabLeaderboard(
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
      <Path
        d="M0 0v5c0 2.582 2.005 5 5.177 5a4.98 4.98 0 003.31 3.492c-.222 1.171-.635 2.638-1.403 4.008H5V20h10v-2.5h-2.084c-.768-1.37-1.181-2.837-1.404-4.008A4.98 4.98 0 0014.823 10C17.985 10 20 7.59 20 5V0H0zm2.5 5V2.5H5v5A2.503 2.503 0 012.5 5zm15 0c0 1.379-1.122 2.5-2.5 2.5v-5h2.5V5z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgTabLeaderboard)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
