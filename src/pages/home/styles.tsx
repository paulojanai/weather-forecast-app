import { StyleSheet } from "react-native";
import { variables } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.colors.gray100,
  },

  body: {
    marginBottom: 16,
    marginLeft: 24,
    marginRight: 24,
  },

  cardHeader: {
    zIndex: 0,
    height: 290,
    padding: 24,
    backgroundColor: variables.colors.orange500,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  headerTitle: {
    textAlign: "center",
    color: variables.colors.white500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h3,
  },

  iconInput: {
    position: "absolute",
    top: "30%",
    left: 24,
  },

  input: {
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
    color: variables.colors.white500,
    paddingLeft: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: variables.colors.white500 + "16",
  },

  searchBtn: {
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: variables.colors.white500 + "16",
  },

  info: {
    textAlign: "center",
    color: variables.colors.gray500,
    fontFamily: variables.fontFamily.semiBold,
    fontSize: variables.fontSize.h4,
  },
});

export default styles;
