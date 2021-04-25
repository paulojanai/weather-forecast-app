import { StyleSheet } from "react-native";
import { variables } from "../../theme";

const styles = StyleSheet.create({
  contentCard: {
    height: 140,
    width: 140,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: variables.colors.white500,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
  },

  title: {
    textAlign: "center",
    fontFamily: variables.fontFamily.medium,
    fontSize: variables.fontSize.h4,
    color: variables.colors.gray500,
  },

  value: {
    textAlign: "center",
    fontFamily: variables.fontFamily.bold,
    fontSize: variables.fontSize.h2,
    color: variables.colors.black400,
  },

  // description: {
  //   fontFamily: variables.fontFamily.regular,
  //   fontSize: variables.fontSize.h5,
  //   color: variables.colors.gray500,
  // },

  inline: { flexDirection: "row", alignItems: "center" },
});

export default styles;
