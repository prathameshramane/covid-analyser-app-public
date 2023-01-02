import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={47}
    height={59}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.4.046c-.17.055-.335.212-.45.433-.104.212-.1.489.033 1.093.078.355.082.438.027.76-.055.346-.05.378.042.618.091.23.096.281.05.53-.06.314-.032.66.16 1.908.133.853.151 1.25.092 2.08-.037.52-.032.594.045.737.074.138.087.322.115 1.267.018.609.069 1.733.105 2.498.05.927.073 1.96.064 3.112-.014 1.456 0 1.797.069 2.24.142.936.078 1.447-.238 1.922-.21.314-1.076 1.328-1.286 1.512-.238.203-.504.29-.581.189-.147-.203-.266-.996-.334-2.305-.106-2.028-.225-2.632-.71-3.613-.105-.217-.42-.84-.7-1.388-.43-.853-.517-1.065-.604-1.452a14.459 14.459 0 0 0-.206-.825c-.238-.802-1.135-2.014-1.826-2.47-.522-.346-1.295-.498-2.069-.41-.631.068-.933.156-1.46.414-.572.281-.956.572-1.62 1.222-.796.779-1.203 1.313-3.39 4.47a12.62 12.62 0 0 0-1.735 3.813c-.128.507-.28 1.369-.28 1.613 0 .074-.104.23-.301.456-1.918 2.171-2.81 4.6-2.7 7.361.022.696.018.766-.06.88-.137.194-.499.941-.668 1.379-.275.724-.421 1.36-.682 2.945-.238 1.439-.28 1.844-.275 2.803v.876l.238 1.074c.129.59.421 1.802.646 2.696.672 2.664.732 3.107.622 4.923-.087 1.447-.073 1.696.142 2.457.092.318.156.659.156.802 0 .221.018.267.155.405.142.143.142.153.055.166-.073.01-.1.051-.11.175-.013.208.32 1.9.385 1.923.023.009.082-.014.128-.047.078-.06.082-.082.032-.3-.055-.22-.037-.423.032-.423.018.004.11.23.201.512l.165.507-.114.055a.443.443 0 0 0-.174.17c-.06.116-.055.139.05.295.284.42.417.871.64 2.125.28 1.604.385 1.936.742 2.379.12.147.32.46.449.696.22.4.242.433.448.507.27.097.33.147.7.627.32.41.453.497.86.544.16.018.321.004.509-.051.375-.11.823-.572 1.12-1.152.115-.231.495-.964.843-1.637l.627-1.221.339-.157c.654-.304.85-.526 1.144-1.281.22-.572.457-.885 1.038-1.365.261-.221.513-.452.554-.511.101-.157.21-.641.21-.931 0-.143-.045-.36-.114-.544-.141-.378-.146-.489-.018-.489.05 0 .224-.078.384-.18.248-.147.362-.267.705-.724.655-.875 1.707-1.977 2.408-2.516.407-.314.549-.484.723-.867.206-.46.33-.594.846-.93.75-.494.897-.835.97-2.31a11.82 11.82 0 0 1 .16-1.503c.12-.65.147-1.249.065-1.54-.023-.096-.138-.28-.243-.419-.297-.364-.334-.442-.229-.52 1.268-.927 1.854-1.752 2.055-2.905.041-.22.092-.926.12-1.567.059-1.369.027-1.77-.216-2.871-.151-.664-.17-.826-.16-1.268.027-1.162.027-1.166-.151-1.682a7.13 7.13 0 0 1-.38-1.867c-.027-.498.018-1.176.078-1.176.018 0 .06.065.087.143.064.19.114.175.837-.23 1.204-.668 1.803-1.097 2.375-1.692.302-.318.682-.83.742-1 .009-.028.178.097.38.281.453.42.7.544 1.423.705.549.125.86.245 1.03.397.064.055.073.133.055.488-.05 1.02-.129 1.729-.362 3.374-.293 2.065-.339 2.434-.384 3.333-.065 1.212.018 1.908.407 3.374.274 1.033.297 1.143.44 1.96.15.866.278 1.368.439 1.737.123.276.183.346.64.724.275.23.531.437.572.456.06.037.046.087-.091.36a6.91 6.91 0 0 0-.289.71c-.119.363-.128.442-.128 1.151-.004.692.01.803.124 1.222.183.668.375 1.023.988 1.848.43.581.614.876.847 1.37l.302.63.38.277c.956.706.993.747 1.634 1.761.42.664.718 1.019.956 1.139.092.046.32.11.504.138.393.06.58.138.567.235a7.402 7.402 0 0 1-.087.369c-.165.668.064 1.401.65 2.065.119.138.462.452.769.7.7.572.746.623 1.217 1.323l.39.586.25.05c.335.07.495.157.724.406.242.267.485.765.787 1.6.334.935.563 1.373.847 1.627.334.304.915.364 1.377.142.471-.225.952-.792 1.364-1.622.092-.184.247-.41.352-.502.248-.226.371-.457.595-1.079.101-.29.266-.664.366-.83.151-.253.179-.34.179-.553 0-.212.018-.272.114-.364.179-.166.375-.843 1.163-4.01 1.12-4.499 1.171-4.803 1.428-8.92.077-1.248.091-1.838.073-2.903-.014-.834 0-1.858.04-2.72.157-3.383.051-4.093-.9-6.315-.563-1.318-.6-1.442-.637-2.304-.027-.553-.091-1.079-.265-2.12a80.809 80.809 0 0 1-.289-1.821l-.05-.438-.393-.53c-.49-.655-.852-1.083-1.245-1.475-.458-.457-.732-.784-.851-1.019-.06-.12-.22-.613-.362-1.102-.426-1.48-.746-2.383-1.121-3.18a20.75 20.75 0 0 1-.531-1.23c-.156-.415-.201-.494-.37-.618a3.094 3.094 0 0 1-.417-.429c-.12-.157-.385-.484-.581-.733-.472-.604-.728-.807-1.78-1.433-.81-.484-1.159-.733-1.927-1.383-.938-.784-2.38-.913-3.524-.314-.224.12-.444.295-.732.586-.348.345-.454.488-.65.876-.252.502-.316.686-.632 1.793-.27.954-.444 1.387-.988 2.447-.705 1.378-.815 1.701-1.3 3.918-.17.76-.316 1.397-.33 1.415-.04.07-.27.032-.448-.069-.22-.124-.37-.35-.567-.839a6.775 6.775 0 0 0-.206-.46c-.055-.088-.078-.347-.147-1.826-.027-.558-.018-.673.069-1.028l.1-.396-.105-.328-.1-.322.105-.415c.105-.401.105-.443.073-1.692-.027-1.17-.023-1.327.064-1.867.11-.682.12-.95.027-1.207a.492.492 0 0 1-.018-.35.757.757 0 0 0 0-.406 2.329 2.329 0 0 1 .023-1.019c.055-.217.078-.6.092-1.383.013-.986.023-1.134.137-1.636.119-.52.128-.618.133-1.752.004-1.17.009-1.207.128-1.58.068-.213.123-.42.123-.47 0-.134-.206-.346-.444-.462C25.83.01 25.39 0 24.383.111c-.86.092-.984.092-1.752-.019-.682-.097-1.017-.11-1.232-.046Z"
      fill="#FF4D00"
    />
  </Svg>
);

export default SvgComponent;