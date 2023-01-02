import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={17} cy={17} r={17} fill="#FF0C0C" />
    </Svg>
  );
}

export default SvgComponent;
