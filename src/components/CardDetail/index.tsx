import React from "react";
import { View, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import styles from "./styles";
import { variables } from "../../theme";

interface Props {
  nameIcon: String;
  title: String;
  description: String;
  value: String;
}

const CardDetail: React.FC<Props> = ({
  nameIcon,
  title,
  description,
  value,
}) => {
  return (
    <View style={[styles.contentCard, styles.inline]}>
      <View style={{ flex: 4, alignItems: "center" }}>
        <Icon
          name={`${nameIcon}`}
          color={variables.colors.orange500}
          size={32}
        />
      </View>
      <View style={{ flex: 12, marginRight: 16 }}>
        <Text style={styles.title}>
          {title}: <Text style={styles.value}>{value}</Text>
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default CardDetail;
