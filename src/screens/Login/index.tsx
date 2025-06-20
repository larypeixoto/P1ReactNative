import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Input } from "../../components/Input/input";

import Seta from "../../assets/Seta.png";

import { styles } from "./styles";

export const Login = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Image source={Seta} style={styles.seta} />
        <Text style={styles.title}>Entrar</Text>
      </View>

      <View style={styles.body}>
        <Input placeholder="Email" placeholderTextColor={"#938F95"} />
        <View style={styles.containerSenha}>
          <Input
            placeholder="Senha"
            placeholderTextColor="#938F95"
            secureTextEntry={!senhaVisivel}
            value={senha}
            style={[styles.input, { paddingRight: 40 }]}
          />
          <TouchableOpacity
            onPress={() => setSenhaVisivel(!senhaVisivel)}
            style={styles.icon}
          >
            <Ionicons
              name={senhaVisivel ? "eye" : "eye-off"}
              size={24}
              color="#938F95"
            />
          </TouchableOpacity>
</View>

          <View style={styles.redefinicao}>
            <Text style={styles.pergunta}>Esqueceu a senha?</Text>
            <Text style={styles.link}> Redefinir</Text>
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </View>

          <View style={styles.ajuda}>
            <Text style={styles.pergunta}>
              Precisa de ajuda? Entre em contato com
            </Text>
            <Text style={styles.link}> Central de Ajuda</Text>
          </View>
        </View>
      </View>
  );
};
