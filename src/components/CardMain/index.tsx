import React from "react";
import { View, Text, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import styles from "./styles";
import { variables } from "../../theme";

const CardMain = () => {
  return (
    <View style={styles.contentCard}>
      <View style={styles.inline}>
        <Icon name="map-pin" size={32} color={variables.colors.orange500} />
        <View style={{ marginLeft: 16 }}>
          <Text style={styles.nameCity}>Canindé, CE</Text>
          <Text style={styles.data}>Sábado, 09 de Maio</Text>
        </View>
      </View>

      <View style={[styles.inline, { justifyContent: "space-between" }]}>
        <Text style={styles.tem}>-37°</Text>
        <Image
          style={{ width: 98, height: 100 }}
          source={require("../../../assets/cloudy.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inline}>
        <View
          style={[
            styles.inline,
            {
              marginRight: 24,
            },
          ]}
        >
          <Icon name="arrow-down" size={16} color={variables.colors.gray500} />
          <Text style={styles.temps}>Min: 28°</Text>
        </View>
        <View style={styles.inline}>
          <Icon name="arrow-up" size={16} color={variables.colors.gray500} />
          <Text style={styles.temps}>Max: 35°</Text>
        </View>
      </View>
    </View>
  );
};

export default CardMain;
