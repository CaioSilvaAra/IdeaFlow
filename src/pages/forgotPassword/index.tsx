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





export default function ForgotPassword(){
    const navigation = useNavigation<NavigationProp<any>>()
    const [email,setEmail] = useState('')
    const [loading,setLoading] = useState(false)


    async function getLogin() {
        navigation.navigate('Login')
    }
    return(

        <View style={style.container}>

            <View style={style.boxTop}>
                <Goback
                    onPress={getLogin}
                />

                
            </View>

            <View style={style.boxMid}>
                <TitleText
                    
                    title="Esqueci a senha"
                
                />
                <SubTitle  
                    title="Insira seu email para receber um código de recuperação."                
                />     
                

                
                
            </View>

            <View style={style.boxBottom}>
            <Input
                title='Endereço de email'
                onChangeText={setEmail}
            />            
            </View>
            <View style={{top:100}}>
                <Button
                    text='Login'
                
                />
            </View>

        </View>
    )
}