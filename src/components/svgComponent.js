import React from "react";
import { SvgCss } from "react-native-svg";

export default function SvgComponent({icon, width, height, color}) {
  const SvgImage = () => <SvgCss xml={icon} width={width} height={height} fill={color} />;
  return <SvgImage />;
}