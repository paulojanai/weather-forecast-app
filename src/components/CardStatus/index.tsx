import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const search = require("../../../assets/search.png");
const notfound = require("../../../assets/notfound.png");

interface Props {
  error: Boolean;
}

const CardStatus: React.FC<Props> = ({ error }) => {
  return (
    <View style={styles.contentCard}>
      <Image
        style={styles.img}
        source={error ? notfound : search}
        resizeMode="contain"
      />
      {error ? (
        <View>
          <Text style={styles.title}>Opps.</Text>
          <Text style={styles.text}>
            Nenhum resultado{`\n`}encontrado para sua busca.
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Pesquise.</Text>
          <Text style={styles.text}>
            Pesquise pelo nome{`\n`}da cidade para ver detalhes.
          </Text>
        </View>
      )}
    </View>
  );
};

export default CardStatus;
