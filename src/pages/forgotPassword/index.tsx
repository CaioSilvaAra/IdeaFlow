import React, { useState } from "react";
import { Text, View, Image, Alert } from "react-native";
import { style } from "./style";
import { Input } from "../../components/input";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Goback } from "../../components/goback";
import { SubTitle, TitleText } from "../../components/text";
import { Button } from "../../components/button";

export default function ForgotPassword() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    navigation.navigate("Login");
  }

  async function getCodePassword() {
    try {
      if(email === ''){
          return Alert.alert('Atenção', 'Informe o email.')
          }

      navigation.navigate('CodePassword')
    } catch (error) {
      console.log(error)
    } 
  }

  return (
    <View style={style.container}>
      <Image source={require("../../assets/fundo1.png")} style={style.fundo} />

      <View style={style.boxTop}>
        <Goback onPress={getLogin} />
      </View>

      <View style={style.boxMid}>
        <TitleText title="Esqueci a senha" />
        <SubTitle title="Insira seu email para receber um código de recuperação." />

        <Input title="Endereço de email" onChangeText={setEmail} />
      </View>

      <View style={style.boxBottom}>
        <Button text="Enviar email" onPress={getCodePassword} />
      </View>
    </View>
  );
}
