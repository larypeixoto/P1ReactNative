import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

type CardsProps = {
  name: string;
  poster: ImageSourcePropType;
  plan?: string;
  chapters?: string;
};

export const Cards = ({ name, poster, plan, chapters }: CardsProps) => {
  const op = chapters || plan;

  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        source={poster}
        style={styles.background}
        imageStyle={styles.image}
      />

      {op && (
        <View style={styles.infoContent}>
          {plan && <Text style={styles.tagPlan}>{plan}</Text>}
          {chapters && <Text style={styles.tagChap}>{chapters}</Text>}
        </View>
      )}

      <Text style={[styles.name, !op && styles.semPlano]}>{name}</Text>
    </TouchableOpacity>
  );
};
