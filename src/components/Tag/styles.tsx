import { StyleSheet } from "react-native";
import { variables } from "../../theme";

const styles = StyleSheet.create({
  contentCard: {
    height: 120,
    justifyContent: "space-around",
    backgroundColor: variables.colors.orange500,
    padding: 26,
    borderRadius: 12,
  },

  title: {
    textAlign: "left",
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h2,
    color: variables.colors.white500,
    marginBottom: 12,
  },

  text: {
    textAlign: "left",
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
    color: variables.colors.white500 + "80",
  },

  thumb: {
    position: "absolute",
    overflow: "hidden",
    right: -20,
    height: 98,
  },

  img: {
    top: 32,
    width: 98,
    height: 100,
  },
});

export default styles;
