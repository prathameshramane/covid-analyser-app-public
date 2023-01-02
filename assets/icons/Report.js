import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={29}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.167 3.625H4.833a2.424 2.424 0 0 0-2.416 2.417v16.916a2.424 2.424 0 0 0 2.416 2.417h19.334a2.424 2.424 0 0 0 2.416-2.417V6.042a2.424 2.424 0 0 0-2.416-2.417ZM12.083 20.542H6.042v-2.417h6.041v2.417Zm0-4.834H6.042v-2.416h6.041v2.416Zm0-4.833H6.042V8.458h6.041v2.417Zm5.824 7.25L14.5 14.693l1.704-1.703 1.703 1.715 3.83-3.83 1.717 1.716-5.547 5.534Z"
      fill="red"
    />
  </Svg>
)

export default SvgComponent
