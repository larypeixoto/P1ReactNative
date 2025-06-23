import { View, Text } from "react-native";

import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";

export const ReadMe = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.intro}>
        P1 apresentada na disciplina de React Native
      </Text>

      <Text style={styles.text}>
        Clones desenvolvidos em React Native das telas home e login do
        aplicativo Viki. Implementado com TypeScript, React Navigation e
        componentes. Os prints de referência se encontram disponíveis na pasta
        printsReferencia.
      </Text>

      <Text style={styles.intro}>Aluna: Laryssa Bragança Peixoto</Text>
    </View>
  );
};
