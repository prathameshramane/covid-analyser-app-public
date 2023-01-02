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
      d="M5.625 10.106 3.019 7.5l-.888.881 3.494 3.494 7.5-7.5-.881-.881-6.619 6.612Z"
      fill="#fff"
    />
  </Svg>
)

export default SvgComponent
