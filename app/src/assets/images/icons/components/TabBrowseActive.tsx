import * as React from 'react'
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Path,
} from 'react-native-svg'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTabBrowseActive(
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
      <Defs>
        <LinearGradient
          x1="37.7%"
          y1="26.1%"
          x2="55.5%"
          y2="60%"
          id="tabBrowseActive_svg__a"
        >
          <Stop stopColor="#FF7F40" offset="0%" />
          <Stop stopColor="#F44C7F" offset="100%" />
        </LinearGradient>
      </Defs>
      <Path
        d="M182.116 745.168c2.548 0 4.648-2.108 4.648-4.665 0-2.54-2.1-4.656-4.648-4.656-2.582 0-4.674 2.116-4.674 4.656 0 2.557 2.092 4.665 4.674 4.665zm11.77 0c2.548 0 4.649-2.108 4.649-4.665 0-2.54-2.1-4.656-4.649-4.656-2.581 0-4.673 2.116-4.673 4.656 0 2.557 2.092 4.665 4.673 4.665zm-11.77 11.007c2.548 0 4.648-2.108 4.648-4.665 0-2.54-2.1-4.656-4.648-4.656-2.582 0-4.674 2.116-4.674 4.656 0 2.557 2.092 4.665 4.674 4.665zm11.77 0c2.548 0 4.649-2.108 4.649-4.665 0-2.54-2.1-4.656-4.649-4.656-2.581 0-4.673 2.116-4.673 4.656 0 2.557 2.092 4.665 4.673 4.665z"
        transform="translate(-177 -735)"
        fill="url(#tabBrowseActive_svg__a)"
        fillRule="nonzero"
      />
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgTabBrowseActive)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
