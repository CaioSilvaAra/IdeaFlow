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





export default function MakePassword(){
    const navigation = useNavigation<NavigationProp<any>>()
    const [email,setEmail] = useState('')
    const [loading,setLoading] = useState(false)


    async function getForgotPassword() {
        navigation.navigate('ForgotPassword')
    }
    return(

        <View style={style.container}>

            <View style={style.boxTop}>
                
                <Goback
                    onPress={getForgotPassword}
                />
                
            </View>

            <View style={style.boxMid}>
                <TitleText
                    title="Criar nova senha"
                />
                <SubTitle  
                    title="Sua senha deve ser diferente da senha anterior"                
                />      

                <Input
                    title='Endereço de email'
                    onChangeText={setEmail}
                /> 
                <Text style={{fontSize:10}}>8  caracteres minimos</Text>
                    <View style={{ marginBottom: 40}} />
 
                <Input
                    title='Endereço de email'
                    onChangeText={setEmail}
                /> 

    
            </View>

            <View style={style.boxBottom}>
        
                <Button
                    text="Criar senha"
                />
            </View>
           

        </View>
    )
}