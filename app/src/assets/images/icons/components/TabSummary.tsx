import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTabSummary(
  { title, titleId, ...props }: SvgProps & SVGRProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M10.988 19.984c.208 0 .498-.132.706-.265 5.935-3.827 9.803-8.243 9.803-12.75 0-3.702-2.548-6.342-5.877-6.342-2.033 0-3.694 1.145-4.632 2.905-.93-1.751-2.59-2.905-4.631-2.905C3.028.627.48 3.267.48 6.969c0 4.507 3.868 8.923 9.811 12.75.208.133.498.265.697.265z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgTabSummary)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
