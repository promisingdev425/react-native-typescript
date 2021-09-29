import * as React from 'react'
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCircularArrow(
  { title, titleId, ...props }: SvgProps & SVGRProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <G
        transform="matrix(-1 0 0 1 21 1)"
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
      >
        <Circle cx={10} cy={10} r={10} />
        <Path strokeLinecap="round" strokeLinejoin="round" d="M9.5 7l2 3-2 3" />
      </G>
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgCircularArrow)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
