import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import CardDetail from "../../components/CardDetail";
import CardStatus from "../../components/CardStatus";
import CardMain from "../../components/CardMain";
import styles from "./styles";

import { variables } from "../../theme";
import api from "../../services";
export interface Data {
  city: String;
  uf: String;
  temp: number;
  temp_min: number;
  temp_max: number;
}

interface Details {
  wind: number;
  visibility: number;
  humidity: number;
  clouds: number;
}

const Home = () => {
  const [nameCity, setNameCity] = useState("");
  const [error, setError] = useState(false);

  const [data, setData] = useState<Data>({} as Data);
  const [details, setDetails] = useState<Details>({} as Details);

  const [loading, setLoading] = useState(false);

  async function handleCity() {
    setLoading(true);
    return api
      .get(`?q=${nameCity}`)
      .then((res) => {
        const data = res.data;

        setData({
          city: data.name,
          uf: data.sys.country,
          temp: data.main.temp,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
        });

        setDetails({
          wind: data.wind.speed,
          visibility: data.visibility,
          humidity: data.main.humidity,
          clouds: data.clouds.all,
        });

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setData({} as Data);
        setDetails({} as Details);
        setError(true);
      });
  }

  useEffect(() => {
    if (nameCity === "") {
      return setError(false);
    }
  }, [nameCity]);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={variables.colors.orange500}
        barStyle="light-content"
      />
      <View style={styles.cardHeader}>
        <View style={styles.header}>
          <Icon
            name="refresh-ccw"
            size={22}
            color={variables.colors.white500}
          />
          <Text style={styles.headerTitle}>Weather Forecast</Text>
          <Icon
            name="toggle-left"
            size={22}
            color={variables.colors.white500}
          />
        </View>
        {/* Input search */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <View style={{ width: "78%" }}>
            <Icon
              style={styles.iconInput}
              name="search"
              size={22}
              color={variables.colors.white500}
            />
            <TextInput
              placeholder="Nome da cidade"
              placeholderTextColor={variables.colors.white500 + "80"}
              selectionColor={variables.colors.white500 + "18"}
              autoCapitalize="words"
              style={styles.input}
              value={nameCity}
              onChangeText={(value) => setNameCity(value)}
              onSubmitEditing={() => handleCity()}
            />
          </View>

          <View style={{ marginLeft: "4%", width: "18%" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleCity()}
              style={styles.searchBtn}
            >
              {loading ? (
                <ActivityIndicator
                  size="small"
                  color={variables.colors.white500}
                />
              ) : (
                <Icon
                  name="navigation"
                  size={22}
                  color={variables.colors.white500}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.body, { marginTop: -134 }]}>
        {data.uf?.length > 0 ? (
          <CardMain data={data} />
        ) : (
          <CardStatus error={error} />
        )}
      </View>

      <View style={styles.body}>
        <Text style={styles.info}>Informações adicionais</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 26,
        }}
      >
        <CardDetail
          nameIcon="droplet"
          title="Umidade"
          // description="Quantidade de água existente no ar"
          value={`${details.humidity ? details.humidity : 0}%`}
        />

        <CardDetail
          nameIcon="wind"
          title="Ventos"
          // description="Velocidade relativa a intensidade do vento"
          value={`${details.wind ? details.wind : 0} km/h`}
        />

        <CardDetail
          nameIcon="sun"
          title="Visibilidade"
          // description="É a distância máxima na qual um objeto pode ser visto"
          value={`${details.visibility ? details.visibility : 0}km`}
        />

        <View style={{ marginRight: -12 }}>
          <CardDetail
            nameIcon="cloud"
            title="Nuvens"
            // description="Parte do céu encoberto por uma camada de nuvens"
            value={`${details.clouds ? details.clouds : 0}%`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
