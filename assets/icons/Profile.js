import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileIcon = (props) => (
  <Svg width={35} height={35} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M17.5 2.917C9.45 2.917 2.917 9.45 2.917 17.5S9.45 32.083 17.5 32.083 32.083 25.55 32.083 17.5 25.55 2.917 17.5 2.917Zm0 4.375a4.37 4.37 0 0 1 4.375 4.375 4.37 4.37 0 0 1-4.375 4.375 4.37 4.37 0 0 1-4.375-4.375A4.37 4.37 0 0 1 17.5 7.292ZM17.5 28a10.5 10.5 0 0 1-8.75-4.696c.044-2.902 5.833-4.491 8.75-4.491 2.902 0 8.706 1.59 8.75 4.491A10.5 10.5 0 0 1 17.5 28Z"
      fill="#FF4D00"
    />
  </Svg>
);

export default ProfileIcon;
