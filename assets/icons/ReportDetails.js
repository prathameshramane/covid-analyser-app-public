import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={44}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M38.5 9.167 22 1.833 5.5 9.167v11c0 10.175 7.04 19.69 16.5 22 4.217-1.027 7.938-3.484 10.78-6.802l-5.72-5.72a9.155 9.155 0 0 1-11.532-1.173c-3.575-3.575-3.575-9.387 0-12.962 3.575-3.575 9.387-3.575 12.962 0 3.135 3.135 3.52 7.975 1.173 11.532l5.317 5.316c2.218-3.593 3.52-7.828 3.52-12.191v-11Z"
      fill="#fff"
    />
    <Path d="M22 27.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" fill="#fff" />
  </Svg>
)

export default SvgComponent
