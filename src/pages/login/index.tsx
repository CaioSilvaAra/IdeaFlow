import React from 'react'

import {
    Text, View, Image, TextInput
} from 'react-native';
import { style } from "./styles"
import { midStyle } from './midstyle'; 
import { topStyle } from './topstyle';
import { bottomStyle } from './bottomstyle'
import Logo from "../../assets/logo.png"

export default function Login (){
    return (
        <View style={style.container}>
            <Image
                // source={require("../../assets/fundo.png")}
            />
            
            <View style={topStyle.boxTop}>
               <Image
               source={Logo}
               resizeMode='contain'
               />
            </View>

            <View style={midStyle.boxMid}>
                <Text style={midStyle.text}>E-mail</Text>
                <TextInput
                    placeholder='E-mail'
                />
                
                <Text style={midStyle.text}>Senha</Text>
                <View style={midStyle.boxInput}>
                    <TextInput
                        style={midStyle.input}
                    />
                    <Text>Senha</Text>
                </View>
            </View>

            <View style={bottomStyle.boxBottom}>
                
            </View>
            
        </View>
    )
}