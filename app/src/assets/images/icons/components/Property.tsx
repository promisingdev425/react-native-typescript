import * as React from 'react'
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Rect,
  Path,
} from 'react-native-svg'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgProperty(
  { title, titleId, ...props }: SvgProps & SVGRProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <Defs>
        <LinearGradient
          x1="19.6%"
          y1="24.4%"
          x2="76%"
          y2="65.2%"
          id="property_svg__a"
        >
          <Stop stopColor="#FF7F40" offset="0%" />
          <Stop stopColor="#F44C7F" offset="100%" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Rect fill="url(#property_svg__a)" width={32} height={32} rx={8} />
        <G fill="currentColor">
          <Path d="M9 12.427V23h4.083V11.661L9 12.427zm2.917 9.406h-1.75v-1.166h1.75v1.166zm0-2.333h-1.75v-1.167h1.75V19.5zm0-2.333h-1.75V16h1.75v1.167zm0-2.334h-1.75v-1.166h1.75v1.166zM14.25 9v14H23V10.64L14.25 9zm3.5 12.833H16v-1.166h1.75v1.166zm0-2.333H16v-1.167h1.75V19.5zm0-2.333H16V16h1.75v1.167zm0-2.334H16v-1.166h1.75v1.166zm0-2.333H16v-1.167h1.75V12.5zm3.5 9.333H19.5v-1.166h1.75v1.166zm0-2.333H19.5v-1.167h1.75V19.5zm0-2.333H19.5V16h1.75v1.167zm0-2.334H19.5v-1.166h1.75v1.166z" />
        </G>
      </G>
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgProperty)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
