import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={42}
    height={63}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.931.276c-.592.364-.882.615-.99.851-.085.187-.085.207-.006.325.084.128.291.241.533.295.72.148 1.32 2.067 1.528 4.868.044.67.044.792-.015.807-.266.089-1.484.758-1.868 1.029-.612.433-1.622 1.442-1.982 1.983a8.835 8.835 0 0 0-.961 2.004c-.099.31-.183.55-.188.546-.02-.03.124-1.358.203-1.86.044-.286.133-.778.197-1.103.064-.32.118-.635.118-.704 0-.064.06-.202.128-.305.355-.537.109-1-.73-1.378-.625-.286-1.7-.492-2.538-.497-.602 0-1.489.133-2.011.3-.543.172-1.12.532-1.307.817-.158.241-.158.586-.01 1.29.138.644.424 2.638.523 3.647.375 3.765.256 7.146-.33 9.524l-.109.438-.27.162c-.312.182-1.105.955-1.544 1.491C1.1 26.293.39 27.971.09 30.048c-.094.66-.08 2.555.03 3.322.182 1.305.551 2.786.99 3.987.385 1.038.952 2.323 1.326 2.992l.36.64.079.729c.266 2.323 1.129 4.774 2.465 6.989l.33.546v1.3c0 3.607-.266 7.205-.71 9.74-.128.714-.113.837.094.837.064 0 .246-.084.404-.192 1.045-.69 2.524-1.093 3.663-.99.818.07 1.252.222 1.932.675.597.398 1.385 1.334 1.873 2.224.099.182.252.202.32.04.04-.084.025-.158-.063-.33-.326-.625-1.415-4.98-1.72-6.886-.04-.231-.065-.428-.055-.433.01-.01.306.182.665.433 2.061 1.428 5.325 3.027 8.184 4.002.739.256 2.538.792 3.357 1.009 1.483.389 4.047.9 5.693 1.137.217.03.641.108.937.172 2.105.458 4.683.468 6.443.02 1.321-.335 2.435-.93 3.022-1.625.97-1.146 1.74-3.568 2.065-6.516.178-1.59.202-2.052.197-4.036-.005-3.056-.226-5.335-.788-8.023-.75-3.568-2.105-7.117-3.668-9.607-.217-.345-.296-.517-.32-.714-.074-.586-.38-2.087-.587-2.894-.961-3.765-2.396-6.344-4.23-7.584a5.947 5.947 0 0 0-1.444-.68l-.345-.098h.75c1.434-.01 3.346.34 4.589.827.256.103.261.103.207.005-.05-.089-.045-.094.074-.05.093.035.172.03.286-.02.33-.132.616-.62.926-1.564.612-1.856.513-3.51-.251-4.341-.143-.153-.177-.227-.138-.266.108-.109-.345-.133-2.228-.128-1.913.005-2.785.059-4.116.246-.493.069-1.667.285-1.854.34-.064.02-.089-.05-.138-.38-.261-1.752-.946-3.622-1.74-4.744-.39-.547-1.08-1.24-1.587-1.595a11.8 11.8 0 0 0-1.134-.64l-.745-.369.005-.27c.01-.419.281-.896 1.213-2.102.375-.483.459-.68.316-.734-.04-.014-.163.02-.276.08-.119.058-.242.088-.301.073-.055-.02-.222-.222-.37-.448-.306-.458-.439-.586-.71-.664-.271-.084-.439-.01-.626.27-.286.419-.513 1.354-.626 2.604-.04.399-.079.743-.099.758-.044.044-.562-.084-.857-.212-.173-.078-.271-.152-.306-.24-.103-.276-.05-1.202.153-2.703.128-.92.163-.851-.478-1.009-.513-.128-1.08-.143-1.297-.034-.335.172-.424.689-.38 2.12.02.542.02 1.054 0 1.143l-.029.152-.177-.103c-.271-.162-.67-.138-1.267.074-.271.093-.528.187-.577.207-.069.03-.084-.02-.113-.4-.129-1.722-.503-3.15-1.184-4.517-.364-.724-.95-1.6-1.07-1.6-.034 0-.26.123-.502.276ZM30.627 15.44a.259.259 0 0 1-.123 0c-.034-.015-.01-.025.06-.025.068 0 .093.01.063.025Zm-9.814.605c.562.91 1.163 2.013 1.326 2.456l.049.128-.153-.147c-.483-.453-1.045-1.462-1.479-2.634-.182-.497-.162-.482.257.197Zm-.947-.221c0 .04-.034.074-.074.074-.079 0-.098-.06-.04-.114.055-.059.114-.039.114.04Zm-1.38 1.058c0 .025-.025.05-.054.05-.025 0-.035-.025-.02-.05.015-.03.04-.05.054-.05.01 0 .02.02.02.05Zm1.025 3.765c.395.123.281.138-.192.03a13.632 13.632 0 0 0-.562-.123c-.079-.01-.005-.015.173-.005.177.01.438.054.581.098Zm11.565 1.61c.29.221.306.236.242.236-.035 0-.163-.089-.286-.197-.271-.236-.247-.26.044-.04Zm1.04.925c.079.084.079.099.015.074a.222.222 0 0 1-.108-.104c-.035-.093-.01-.088.093.03Zm1.454 1.969c.06.113.06.118-.014.054-.05-.034-.084-.098-.084-.143 0-.088.015-.079.098.089Zm-20.063 1.265c-.054.083-.054.083-.03 0 .015-.05.03-.118.035-.148 0-.044.01-.044.025 0 .014.034 0 .098-.03.148Zm20.734.295.069.236-.099-.123a.503.503 0 0 1-.098-.266c0-.192.04-.142.128.153ZM1.385 28.07c-.05.044-.054.039-.024-.03.014-.05.044-.074.059-.06.014.016 0 .055-.035.09Zm11.53 1.466c-.187 1.295-.433 4.08-.448 5.153-.01.37-.01.374-.045.133-.093-.6-.024-2.274.148-3.652.094-.728.39-2.348.424-2.313.01.01-.024.315-.079.68Zm21.883.315c.005.084-.005.084-.044.025-.025-.04-.045-.173-.045-.296l.005-.221.044.197c.02.108.04.241.04.295ZM1 30.231c.034.019.03.058-.01.107-.104.123-.133.094-.109-.108.01-.098.03-.148.045-.108.015.04.049.088.074.108Zm33.58 3.607c-.02.123-.05.216-.06.202-.014-.015-.009-.128.01-.251.016-.128.045-.222.06-.207a.96.96 0 0 1-.01.256Zm-.242 3.43c.306.325.617.763.474.675a.703.703 0 0 1-.188-.236c-.049-.094-.226-.31-.394-.483-.163-.167-.261-.285-.217-.26.04.019.187.157.325.304ZM20.65 39.862c.153.556.113.6-.074.084-.104-.285-.163-.684-.094-.61.015.01.09.25.168.526Zm.685 2.195c0 .025-.03-.02-.064-.098a.717.717 0 0 1-.069-.222c0-.039.035.005.07.099.034.093.063.192.063.221Zm.227.66c-.03.034-.054-.01-.084-.167l-.03-.148.065.148c.04.078.059.157.049.167ZM5.176 46.34c.069.093.069.093-.01.029-.05-.035-.089-.089-.089-.118 0-.03.005-.04.015-.03.005.01.045.064.084.119Zm1.8 2.52.088.137-.103-.093c-.06-.054-.109-.114-.109-.138 0-.069.035-.044.123.093Zm-.183.383c-.015.015-.044-.01-.06-.059-.029-.069-.024-.073.025-.03.035.035.05.075.035.09Zm.404.492c.064.07.094.124.064.124s-.088-.055-.133-.123c-.044-.07-.074-.123-.064-.123.01 0 .07.054.133.123Zm.39.542c-.015.01-.08-.05-.143-.138l-.114-.157.143.133c.074.073.128.147.114.162Zm.394.487c-.015.015-.089-.059-.163-.157l-.143-.182.168.157c.089.089.153.172.138.182Zm.498.537c0 .069-.133-.054-.306-.28l-.158-.203.232.222c.128.118.232.236.232.26Zm30.854 1.471c-.005.197-.005.202-.044.074-.04-.128-.02-.28.03-.28.01 0 .019.093.014.206Zm-28.355.857c.01.034.143.143.291.246.148.103.266.207.266.231 0 .03-.04.015-.084-.024-.049-.04-.315-.252-.591-.478-.271-.221-.513-.433-.528-.472-.014-.04.119.039.296.182.178.138.335.28.35.315Zm28.404.964c0 2.584-.542 4.268-1.597 4.937-.133.089-.3.177-.37.197-.069.02.01-.044.173-.143.562-.34 1.025-.95 1.163-1.535.03-.133.104-.355.168-.488.143-.315.227-.718.217-1.033a3 3 0 0 1 .05-.566c.039-.197.058-.606.048-1.059-.014-.55 0-.782.055-.925a.807.807 0 0 1 .084-.182c.004 0 .01.36.01.797Zm-25.722.916c.118.074.419.246.66.379.36.192.71.399.858.502.01.01.01.024-.005.04-.04.039-1.814-.98-1.814-1.04 0-.048.094-.01.3.119Zm7.315 3.357c.04.064-.024.064-.123 0-.064-.04-.064-.05.01-.05.044 0 .099.02.113.05Zm1.666.526a.262.262 0 0 1-.123 0c-.034-.015-.01-.024.06-.024.069 0 .093.01.064.024Zm5.571 1.28a.262.262 0 0 1-.123 0c-.035-.015-.01-.025.059-.025.069 0 .093.01.064.025Zm1.232.197a.37.37 0 0 1-.147 0c-.05-.015-.02-.025.059-.025.083 0 .118.01.088.025Z"
      fill="#FF4D00"
    />
  </Svg>
);

export default SvgComponent;