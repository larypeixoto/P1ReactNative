import React from "react";
import { styles } from "./styles";
import { View, Image, ImageProps } from "react-native";

export const Icon = (props: ImageProps) => {
  return (
    <View>
      <Image {...props} style={styles.icon} />
    </View>
  );
};
