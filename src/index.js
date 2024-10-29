import React from "react";
import { Text } from "react-native";
import * as Icon from "./icons";

const RemixIcon = ({
  name = "remixicon-fill",
  color = "black",
  size = 24,
  ...props
}) => {
  name = name.startsWith("ri-") ? name.substring(3) : name;

  const Component = Icon[iconComponentName];

  return Component ? (
    <Component {...props} fill={color || "black"} width={size} height={size} />
  ) : (
    <Text>Invalid Icon Name</Text>
  );
};

export default RemixIcon;
