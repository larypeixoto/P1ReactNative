import { View, ImageBackground, TouchableOpacity, Text, ScrollView,
} from "react-native";
import { HomensDosSonhos } from "../../components/Lists/HomensDosSonhos";
import { LigadosPeloDestino } from "../../components/Lists/LigadosPeloDestino";
import { Button } from "../../components/Button";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";

import { Top } from "../../components/Top";
import { Footer } from "../../components/Footer";

import Banner from "../../assets/SegundaChanceNoAmor.jpg";

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView>
        <Top />
        <View style={styles.banner}>
          <ImageBackground source={Banner} style={styles.banner}>
            <TouchableOpacity style={styles.tagBadge}>
              <Text style={styles.badgeText}>Maratone Agora!</Text>
            </TouchableOpacity>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Segunda chance no amor</Text>
            </View>

            <View style={styles.age}>
              <Text style={styles.ageText}>A14</Text>
            </View>

            <View style={styles.tagsDrama}>
              <Text style={styles.tag}>Korea</Text>
              <Text style={styles.separator}> • </Text>
              <Text style={styles.tag}>Romance</Text>
              <Text style={styles.separator}> • </Text>
              <Text style={styles.tag}>Comédia romântica</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.buttons}>
          <Button title="▶  Assistir Ep. 1" />
          <Button title="✛  Minha Lista" />
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Homens dos sonhos ›</Text>
        </View>
        <HomensDosSonhos />

        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Ligados pelo destino ›</Text>
        </View>

        <LigadosPeloDestino />
      </ScrollView>
      <Footer />
    </View>
  );
};
