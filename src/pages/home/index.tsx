import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { style } from "./style";
import { Input } from "../../components/input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Login from "../login";
import { Goback } from "../../components/goback";
import { SubTitle, TitleText } from "../../components/text";
import { Button } from "../../components/button";
import { Find } from "../../components/find";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Calendar, WeekCalendar } from "react-native-calendars";

export default function Home() {
  return (
    <View style={style.container}>
      <Image source={require("../../assets/fundo.png")} style={style.fundo} />

      <View style={style.boxTop}>
        <Find
          placeholder="Search your note..."
          placeholderTextColor={"white"}
          textAlign="center"
          IconLeft={MaterialIcons}
          iconLeftName={"menu"}
          IconRigth={MaterialIcons}
          iconRigthName={"supervised-user-circle"}
        />
      </View>

      <View style={style.boxTitle}>
        <View style={{ alignItems: "center" }}>
          <TitleText title="Start Your Journey" />
        </View>
        <View style={{ alignItems: "center" }}>
          <SubTitle title="Every big step starts with a small step." />
          <SubTitle title="Notes your first idea and start" />
          <SubTitle title="your journey!" />
        </View>
      </View>

      <View style={style.boxBottom}>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={60} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
