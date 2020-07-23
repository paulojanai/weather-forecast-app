import { StyleSheet } from "react-native";
import { variables } from "../../theme";

const styles = StyleSheet.create({
  contentCard: {
    height: 260,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: variables.colors.white500,
    padding: 36,
    borderRadius: 12,
  },

  title: {
    textAlign: "center",
    fontFamily: variables.fontFamily.bold_italic,
    fontSize: variables.fontSize.h2,
    color: variables.colors.black500,
    marginBottom: 16,
  },

  text: {
    textAlign: "center",
    fontFamily: variables.fontFamily.regular_italic,
    fontSize: variables.fontSize.h4,
    color: variables.colors.gray500,
  },

  img: {
    width: 82,
    height: 82,
  },
});

export default styles;
