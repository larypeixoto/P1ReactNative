import { styles } from "./styles";
import { FlatList, View } from "react-native";
import { Cards } from "../../Cards";

import posterCV from "../../../assets/posterCV.png";
import posterDI from "../../../assets/posterDI.png";
import posterLND from "../../../assets/posterLND.png";

const dramas = [
  {
    nome: "Céu Vermelho",
    poster: posterCV,
  },
  {
    nome: "Disputa imortal",
    poster: posterDI,
    plan: "STANDARD",
    chapters: "Episódios...",
  },
  {
    nome: "Lua no dia",
    poster: posterLND,
    plan: "STANDARD",
    chapters: "Episódios...",
  },
];

export const LigadosPeloDestino = () => {
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
