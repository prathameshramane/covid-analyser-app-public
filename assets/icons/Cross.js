import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m11.875 4.006-.881-.881L7.5 6.619 4.006 3.125l-.881.881L6.619 7.5l-3.494 3.494.881.881L7.5 8.381l3.494 3.494.881-.881L8.381 7.5l3.494-3.494Z"
      fill="#fff"
    />
  </Svg>
)

export default SvgComponent
