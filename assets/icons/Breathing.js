import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={62}
    height={62}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.542 7.812h-2.584v2.583h6.459v2.584h-6.459v2.69a7.752 7.752 0 0 1 6.459 7.643v2.583h-15.5v-2.583a7.752 7.752 0 0 1 6.458-7.643v-2.69h-2.804a3.877 3.877 0 0 1-7.53-1.292 3.875 3.875 0 0 1 7.53-1.292h2.804V7.812h-2.583V5.228h7.75v2.584ZM12.917 28.479v27.124c0 .714.578 1.292 1.291 1.292h12.917c.713 0 1.292-.578 1.292-1.292V28.478h-15.5Zm0-18.084a1.292 1.292 0 1 0 0 2.583 1.292 1.292 0 0 0 0-2.583Zm20.666 16.792a5.167 5.167 0 1 1 10.334 0v7.75a5.167 5.167 0 0 1-10.334 0v-7.75Zm5.167-2.584a2.583 2.583 0 0 0-2.583 2.584v7.75a2.583 2.583 0 0 0 5.166 0v-7.75a2.583 2.583 0 0 0-2.583-2.584Zm6.458 9.042h3.875a1.292 1.292 0 1 1 0 2.583 3.875 3.875 0 0 0-3.875 3.875v2.584c0 .713.579 1.291 1.292 1.291h6.458v-2.583h-5.166v-1.292c0-.713.578-1.291 1.291-1.291a3.875 3.875 0 0 0 0-7.75h-3.875v2.583Z"
      fill="#FF4D00"
    />
  </Svg>
)

export default SvgComponent
