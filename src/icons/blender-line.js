import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBlenderLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13.122 2.217a1 1 0 1 0-1.244 1.566L15.297 6.5H4.5a1 1 0 1 0 0 2h5.472L.878 15.717a1 1 0 0 0 1.244 1.566l5.423-4.303q-.045.379-.045.77c0 4.108 3.691 7.25 8 7.25s8-3.142 8-7.25c0-2.247-1.124-4.227-2.835-5.539zM11.565 9.79C12.61 8.992 13.983 8.5 15.5 8.5c1.52 0 2.895.494 3.942 1.295 1.284.98 2.058 2.403 2.058 3.955 0 2.796-2.577 5.25-6 5.25s-6-2.454-6-5.25c0-1.48.704-2.842 1.882-3.816zm2.913 4.303c-.277-.26-.399-.566-.381-.882.032-.565.624-1.21 1.498-1.21.873 0 1.465.644 1.498 1.209.018.33-.108.633-.378.887-.285.27-.697.44-1.12.44-.414 0-.827-.17-1.117-.444M15.595 10c-1.746 0-3.394 1.295-3.495 3.1-.108 1.945 1.625 3.436 3.495 3.436 1.876 0 3.602-1.477 3.495-3.438C18.988 11.294 17.34 10 15.595 10" />
  </Svg>
);
export default SvgBlenderLine;
