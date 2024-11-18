import React, { useState } from "react";
import { Text, View, Image, Alert } from "react-native";
import { style } from "./style";
import { Input } from "../../components/input";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Goback } from "../../components/goback";
import { SubTitle, TitleText } from "../../components/text";
import { Button } from "../../components/button";

export default function MakePassword() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  

  async function getLogin() {
    try {
      if (password !== confirmPassword) {
        return Alert.alert(
          "Atenção",
          "A senhas informadas não são iguais, tente novamente."
        );
      }
      if (password === "") {
        return Alert.alert("Atenção", "O campo de senha não foi digitado.");
      }
      if (password === confirmPassword) {
        return Alert.alert(
          "Parabéns, sua senha foi alterada",
          "Tente fazer o acesso navamente."
        );
      }
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={style.container}>
      <Image source={require("../../assets/fundo1.png")} style={style.fundo} />

      <View style={style.boxTop}>
        <Goback onPress={getLogin}/>
      </View>

      <View style={style.boxMid}>
        <TitleText title="Criar nova senha" />
        <SubTitle title="Sua senha deve ser diferente da senha anterior." />

        <Input
          title="Digite a nova senha"
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          onIconRigthPress={() => setShowPassword((prev) => !prev)}
          IconRigth={MaterialIcons}
          iconRigthName={showPassword ? "visibility" : "visibility-off"}
        />
        <Text style={{ fontSize: 10 }}>8 caracteres minimos</Text>
        <View style={{ marginBottom: 40 }} />

        <Input
          title="Digite novamente"
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword}
          onIconRigthPress={() => setShowPassword((prev) => !prev)}
          IconRigth={MaterialIcons}
          iconRigthName={showPassword ? "visibility" : "visibility-off"}
        />
      </View>

      <View style={style.boxBottom}>
        <Button text="Criar senha" onPress={getLogin} />
      </View>
    </View>
  );
}
