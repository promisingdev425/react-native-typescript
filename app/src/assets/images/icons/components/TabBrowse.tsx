import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTabBrowse(
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
      <Path
        d="M5.116 10.168c2.548 0 4.648-2.108 4.648-4.665 0-2.54-2.1-4.656-4.648-4.656C2.534.847.442 2.963.442 5.503c0 2.557 2.092 4.665 4.674 4.665zm11.77 0c2.548 0 4.649-2.108 4.649-4.665 0-2.54-2.1-4.656-4.649-4.656-2.581 0-4.673 2.116-4.673 4.656 0 2.557 2.092 4.665 4.673 4.665zM5.116 21.175c2.548 0 4.648-2.108 4.648-4.665 0-2.54-2.1-4.656-4.648-4.656-2.582 0-4.674 2.116-4.674 4.656 0 2.557 2.092 4.665 4.674 4.665zm11.77 0c2.548 0 4.649-2.108 4.649-4.665 0-2.54-2.1-4.656-4.649-4.656-2.581 0-4.673 2.116-4.673 4.656 0 2.557 2.092 4.665 4.673 4.665z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgTabBrowse)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
