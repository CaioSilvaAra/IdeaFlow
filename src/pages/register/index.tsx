import React, { useState } from "react";
import { Text, View, Image, Alert } from "react-native";
import { style } from "./style";
import { Input } from "../../components/input";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Goback } from "../../components/goback";
import { SubTitle, TitleText } from "../../components/text";
import { Button } from "../../components/button";
import { MaterialIcons } from "@expo/vector-icons";

export default function Register() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function getLogin() {
    try {
      if (password !== confirmPassword) {
        return Alert.alert(
          "Atenção",
          "A senhas informadas não são iguais, tente novamente."
        );
      }
      if (name === "") {
        return Alert.alert("Atenção", "O nome não foi informado.");
      }
      if (email === "") {
        return Alert.alert("Atenção", "O email não foi informado.");
      }
      if (password === "") {
        return Alert.alert("Atenção", "A senha não foi informado.");
      }
      if (confirmPassword === "") {
        return Alert.alert("Atenção", "A confirmação de senha não foi informado.");
      }

      Alert.alert("Parabéns", "Usuario criado com sucesso.")
      navigation.navigate("ForgotPassword");
    } catch (error) {
      console.log(error);
    }

    navigation.navigate("Login");
  }
  return (
    <View style={style.container}>
      <Image source={require("../../assets/fundo1.png")} style={style.fundo} />

      <View style={style.boxTop}>
        <View style={{ bottom: 20 }}>
          <Goback onPress={getLogin} />
        </View>
        <TitleText title="Registre-se" />

        <SubTitle title="E comece a fazer suas anotações" />
        <View style={style.input}>
          <Input
            title="Nome completo"
            onChangeText={setName}
          />

          <Input
            title="Endereço de e-mail"
            onChangeText={setEmail}
          />

          <Input
            title="Senha"
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            onIconRigthPress={() => setShowPassword((prev) => !prev)}
            IconRigth={MaterialIcons}
            iconRigthName={showPassword ? "visibility" : "visibility-off"}
          />

          <Input
            title="Digite senha novamente"
            secureTextEntry={!showPassword}
            onIconRigthPress={() => setShowPassword((prev) => !prev)}
            onChangeText={setConfirmPassword}
            IconRigth={MaterialIcons}
            iconRigthName={showPassword ? "visibility" : "visibility-off"}
          />
        </View>
        <View style={style.boxButton}>
          <Button text="Registre-se" onPress={getLogin} />
        </View>
      </View>
    </View>
  );
}
