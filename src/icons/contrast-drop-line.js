import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgContrastDropLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 3.097-4.95 4.95a7 7 0 1 0 9.9 0zM12 .27l6.364 6.364a9 9 0 1 1-12.728 0zm0 17.728v-10a5 5 0 1 1 0 10" />
  </Svg>
);
export default SvgContrastDropLine;