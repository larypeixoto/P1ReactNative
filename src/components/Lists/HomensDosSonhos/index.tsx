import { styles } from "./styles";
import { FlatList, View } from "react-native";
import { Cards } from "../../Cards";

import posterDI from "../../../assets/posterDI.png";
import posterAPNCD from "../../../assets/posterAPNCD.png";
import posterCCA from "../../../assets/posterCCA.jpg";

const dramas = [
  {
    nome: "Disputa imortal",
    poster: posterDI,
    plan: "STANDARD",
    chapters: "Episódios...",
  },
  {
    nome: "Outra paixão na corte do dragão",
    poster: posterAPNCD,
    plan: "STANDARD",
    chapters: "Episódios...",
  },
  {
    nome: "Comer, correr, amar",
    poster: posterCCA,
  },
];

export const HomensDosSonhos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dramas}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Cards
            name={item.nome}
            poster={item.poster}
            plan={item.plan}
            chapters={item.chapters}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};
