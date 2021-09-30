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

function SvgApplication(
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
          x1="6.1%"
          y1="12.2%"
          x2="72.9%"
          y2="65.2%"
          id="application_svg__a"
        >
          <Stop stopColor="#FF7F40" offset="0%" />
          <Stop stopColor="#FF7F40" offset="0%" />
          <Stop stopColor="#F44C7F" offset="100%" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Rect fill="currentColor" opacity={0.1} width={32} height={32} rx={8} />
        <Path
          d="M10.969 0c.224 0 .406.182.406.406v7.827L9.75 7.15 6.5 9.315V13H.406A.406.406 0 010 12.594V.406C0 .182.182 0 .406 0zM9.75 8.125l2.438 1.625v2.844a.406.406 0 01-.407.406h-1.219v-1.625H8.938V13h-1.22a.406.406 0 01-.405-.406V9.75L9.75 8.125zm-4.063.406h-3.25v.813h3.25V8.53zm3.25-2.437h-6.5v.812h6.5v-.812zm0-2.438h-6.5v.813h6.5v-.813z"
          transform="translate(10 10)"
          fill="url(#application_svg__a)"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  )
}

const ForwardRef = React.forwardRef(SvgApplication)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
