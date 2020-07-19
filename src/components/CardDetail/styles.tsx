import { StyleSheet } from "react-native";
import { variables } from "../../theme";

const styles = StyleSheet.create({
  contentCard: {
    height: 80,
    backgroundColor: variables.colors.white500,
    borderRadius: 12,
    marginBottom: 8,
  },

  title: {
    fontFamily: variables.fontFamily.medium,
    fontSize: variables.fontSize.h3,
    color: variables.colors.black400,
    marginBottom: 2,
  },

  value: {
    fontFamily: variables.fontFamily.bold,
    fontSize: variables.fontSize.h3,
    color: variables.colors.black400,
  },

  description: {
    fontFamily: variables.fontFamily.regular,
    fontSize: variables.fontSize.h5,
    color: variables.colors.gray500,
  },

  inline: { flexDirection: "row", alignItems: "center" },
});

export default styles;
