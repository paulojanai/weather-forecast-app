import React from "react";
import { StyleSheet, View } from "react-native";
import { variables } from "@theme/index";

// import { Container } from './styles';

interface Props {
  children?: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <View style={styles.contentCard}>{children}</View>;
};

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
});

export default Card;
