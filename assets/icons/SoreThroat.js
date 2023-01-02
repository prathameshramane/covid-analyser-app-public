import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={61}
    height={61}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M44.423 2.812C28.944-5.158 5.163 4.374 9.79 24.32l-2.32 2.807-4.099 7.504 3.988 3.17-.166 5.33 1.593 2.284s-1.897 7.13 1.004 8.14c5.41 1.888 11.781.96 11.781.96L21.89 61h26.917s-2.664-13.444 1.381-19.154c4.045-5.71 17.24-27.191-5.765-39.034Z"
        fill="#FF4D00"
      />
      <G opacity={0.2} fill="#fff">
        <Path
          opacity={0.2}
          d="M19.031 54.514s-.994.145-2.528.205c.938.035 1.8.028 2.539 0l-.01-.205ZM44.423 2.812C40.339.71 35.679-.174 31.113.029c3.73.167 7.44 1.07 10.767 2.783 23.007 11.843 9.812 33.323 5.767 39.035C43.602 47.555 46.266 61 46.266 61h2.54s-2.663-13.444 1.382-19.154c4.045-5.71 17.24-27.191-5.765-39.034Z"
        />
      </G>
      <Path
        d="M35.143 43.367v-.16H7.248l1.54 2.208s-.033.12-.083.335h23.897V61h2.541V43.367Z"
        fill="#5E5F62"
      />
      <Path
        d="m40.424 43.661 1.754-.727-2.565-1.717 1.342-1.344-3.029-.605.728-1.755-3.03.6v-1.9l-2.57 1.715-.727-1.756-1.718 2.568-1.343-1.345-.606 3.03-1.753-.727.6 3.029h-1.9l1.713 2.569-1.755.728 2.567 1.718-1.344 1.342 3.03.605-.728 1.756 3.03-.6v1.899l2.569-1.713.728 1.754 1.718-2.565 1.342 1.342.605-3.029 1.756.726-.6-3.029h1.899l-1.713-2.569Z"
        fill="#5E5F62"
      />
      <Path
        d="M33.872 48.291a3.812 3.812 0 1 0 0-7.625 3.812 3.812 0 0 0 0 7.625Z"
        fill="#5E5F62"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h61v61H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent