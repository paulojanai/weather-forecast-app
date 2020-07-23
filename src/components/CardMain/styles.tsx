import { StyleSheet } from "react-native";
import { variables } from "../../theme";

const styles = StyleSheet.create({
  contentCard: {
    height: 260,
    backgroundColor: variables.colors.white500,
    padding: 36,
    borderRadius: 12,
  },

  nameCity: {
    fontFamily: variables.fontFamily.bold,
    fontSize: variables.fontSize.h1,
    color: variables.colors.black400,
  },

  data: {
    fontFamily: variables.fontFamily.medium,
    fontSize: variables.fontSize.h5,
    color: variables.colors.orange500,
  },

  tem: {
    marginTop: 18,
    marginBottom: 24,
    fontFamily: variables.fontFamily.medium,
    fontSize: variables.fontSize.big,
    color: variables.colors.black400,
  },

  temps: {
    marginLeft: 4,
    fontFamily: variables.fontFamily.regular,
    fontSize: variables.fontSize.h4,
    color: variables.colors.gray500,
  },

  img: {
    width: 82,
    height: 82,
  },

  inline: { flexDirection: "row", alignItems: "center" },
});

export default styles;
