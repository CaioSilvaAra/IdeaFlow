import React, { useState } from "react";
import { Text, View, Image, Alert } from "react-native";
import { style } from "./style";
import { Input } from "../../components/input";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Goback } from "../../components/goback";
import { SubTitle, TitleText } from "../../components/text";
import { Button } from "../../components/button";

export default function CodePassword() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [code, setCode] = useState("");

  async function getLogin() {
    navigation.navigate("Login");
  }

  async function getMakePassword() {
    try {
      if (code === "") {
        return Alert.alert("Atenção", "Informe o código de recuperação.");
      }

      navigation.navigate("MakePassword");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <Image source={require("../../assets/fundo1.png")} style={style.fundo} />

      <View style={style.boxTop}>
        <Goback onPress={getLogin} />
      </View>

      <View style={style.boxMid}>
        <TitleText title="Envio de Recuperação" />
        <SubTitle title="Insira o codigo abaixo" />

        <Input title="Código de Recuperação" onChangeText={setCode} />
      </View>

      <View style={style.boxBottom}>
        <Button text="Verificar Código" onPress={getMakePassword} />
      </View>
    </View>
  );
}
