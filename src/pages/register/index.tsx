import React, { useState } from "react";
import {Text, View} from 'react-native'
import {style} from './style'
import { Input } from "../../components/input";
import { TouchableOpacity } from "react-native-gesture-handler";
import {useNavigation, NavigationProp} from '@react-navigation/native'
import Login from "../login";
import { Goback } from "../../components/goback";
import { SubTitle, TitleText } from "../../components/text";
import { Button } from "../../components/button";





export default function Register(){
    const navigation = useNavigation<NavigationProp<any>>()
    const [email,setEmail] = useState('')
    const [loading,setLoading] = useState(false)


    async function getLogin() {
        navigation.navigate('Login')
    }
    return(

        <View style={style.container}>

           <View style={style.boxTop}>
                <View style={{bottom:20}}>
                    <Goback
                        onPress={getLogin}
                    />
                </View>
                <TitleText
                    title="Registre-se"
                />
                
                <SubTitle
                    title="E comece a fazer suas anotações"
                />
                <View style={style.input}>
                    <Input style={style.inputitem} title="Nome completo"/>
                    <View style={{ marginBottom: 40}} />

                    <Input style={style.inputitem} title="Endereço de e-mail"/>
                    <View style={{ marginBottom: 40}} />

                    <Input style={style.inputitem} title="Senha"/>
                    <View style={{ marginBottom: 40}} />

                    <Input style={style.inputitem} title="Digite senha novamente"/>

                </View>
                <View style={style.boxButton}>

                    <Button
                        text="Registre-se"
                        loading={loading}
                    />

                </View>
           </View>

        </View>
    )
}