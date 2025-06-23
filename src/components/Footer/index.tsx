import React from "react";
import { View } from "react-native";
import { Icon } from "../Icon";

import Home from "../../assets/home.png";
import Busca from "../../assets/Busca.png";
import Download from "../../assets/Download.png";
import Eu from "../../assets/Eu.png";

import { styles } from "./styles";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Icon source={Home} />
      <Icon source={Busca} />
      <Icon source={Download} />
      <Icon source={Eu} />
    </View>
  );
};
