import React from "react";
import { View, Image, Text } from "react-native";

import { styles } from "./styles";

import logo from "../../assets/Logo.png";

export const Top = () => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.logoImage} />
      </View>
      <View style={styles.containerOpcoes}>
        <Text style={styles.todosOsProgramas}>Todos os Programas</Text>
        <Text style={styles.todosOsFilmes}>Filmes</Text>
      </View>
    </View>
  );
};
