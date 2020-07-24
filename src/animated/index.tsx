import { Dimensions, Animated } from "react-native";
import { variables } from "../theme";

const WITDH_SCREEN = Dimensions.get("window").width;
const HEIGHT_SCREEN = Dimensions.get("window").height;

export const fadeInTop = (param: Animated.Value) =>
  param.interpolate({
    inputRange: [0, WITDH_SCREEN],
    outputRange: [0, WITDH_SCREEN],
  });

export const opacityAnimated = (param: Animated.Value) =>
  param.interpolate({
    inputRange: [0, 1, WITDH_SCREEN / 1.5],
    outputRange: [1, 1, 0],
  });

export const changeColorText = (param: Animated.Value) =>
  param.interpolate({
    inputRange: [0, HEIGHT_SCREEN / 4],
    outputRange: [
      `${variables.colors.gray500}`,
      `${variables.colors.white500}`,
    ],
  });

export const findOut = (param: Animated.Value) =>
  param.interpolate({
    inputRange: [0, WITDH_SCREEN / 1.01],
    outputRange: [1, -1],
  });
