import React from "react";
import { View, Text, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import styles from "./styles";
import { variables } from "../../theme";

import { Data } from "../../pages/home";

import moment from "moment";
import "moment/locale/pt-br";

interface Props {
  data: Data;
}

const CardMain: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.contentCard}>
      <View style={styles.inline}>
        <Icon name="map-pin" size={32} color={variables.colors.orange500} />
        <View style={{ marginLeft: 16 }}>
          <Text style={styles.nameCity}>
            {data.city}, {data.uf}
          </Text>
          <Text style={styles.data}>
            {moment().format("dddd, D [de] MMMM")}
          </Text>
        </View>
      </View>

      <View style={[styles.inline, { justifyContent: "space-between" }]}>
        <Text style={styles.tem}>{data.temp.toFixed(0)}°</Text>
        <Image
          style={styles.img}
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
          <Text style={styles.temps}>Min: {data.temp_min.toFixed(0)}</Text>
        </View>
        <View style={styles.inline}>
          <Icon name="arrow-up" size={16} color={variables.colors.gray500} />
          <Text style={styles.temps}>Max: {data.temp_max.toFixed(0)}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardMain;
