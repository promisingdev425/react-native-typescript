import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
interface SVGRProps {
  title?: string
  titleId?: string
}

function SvgArrow(
  { title, titleId, ...props }: SvgProps & SVGRProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      width={7}
      height={16}
      viewBox="0 0 7 16"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M.548.207a1.231 1.231 0 011.62.226l.087.115 4.513 6.77c.245.367.272.833.081 1.223l-.081.142-4.513 6.769a1.23 1.23 0 01-2.12-1.241l.072-.124L4.264 8 .207 1.914A1.231 1.231 0 01.433.294L.548.206z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgArrow)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
