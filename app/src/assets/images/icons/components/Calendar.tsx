import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCalendar(
  { title, titleId, ...props }: SvgProps & SVGRProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <Path
        d="M5 0v2h2V0h2v2h2V0h2v2h2a1 1 0 011 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h2V0h2zm9 5H2v9h12V5zm-8 5v2H4v-2h2zm3 0v2H7v-2h2zm3 0v2h-2v-2h2zM6 7v2H4V7h2zm3 0v2H7V7h2zm3 0v2h-2V7h2z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgCalendar)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
