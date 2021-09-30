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

function SvgStar(
  { title, titleId, ...props }: SvgProps & SVGRProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      width={48}
      height={44}
      viewBox="0 0 48 44"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <Defs>
        <LinearGradient
          x1="34.3%"
          y1="35.2%"
          x2="73.8%"
          y2="62.7%"
          id="star_svg__a"
        >
          <Stop stopColor="#FF7F40" offset="0%" />
          <Stop stopColor="#F44C7F" offset="100%" />
        </LinearGradient>
      </Defs>
      <Path
        d="M24.004 36.483l-13.04 6.611a1 1 0 01-1.436-1.066l2.476-13.956-10.481-9.84a1 1 0 01.546-1.72l14.515-2.031 6.53-12.745a1 1 0 011.78 0l6.534 12.745 14.504 2.03a1 1 0 01.546 1.72L36 28.072l2.49 13.955a1 1 0 01-1.437 1.067l-13.049-6.611z"
        fill="url(#star_svg__a)"
        fillRule="nonzero"
      />
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgStar)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
