import React from "react";
import { View, Text, ImageBackground, ImageSourcePropType, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type CardsProps = {
  name: string;
  poster: ImageSourcePropType;
  plan?: string;
  chapters?: string;
};

export const Cards = ({ name, poster, plan, chapters }: CardsProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        source={poster}
        style={styles.background}
        imageStyle={styles.image}
      />
        <View style={styles.infoContent}>
        {plan ? (
          <Text style={styles.tagPlan}>{plan}</Text>
        ) : (
          <View style={styles.tagPlaceholder} />
        )}

        {chapters ? (
          <Text style={styles.tagChap}>{chapters}</Text>
        ) : (
          <View style={styles.tagPlaceholder} />
        )}
      </View>
          <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};
