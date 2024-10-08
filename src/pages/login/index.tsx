import React, { useState } from 'react'
import {
    Text, View, Image, TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { style } from "./styles"
import Logo from "../../assets/logo.png"
import {MaterialIcons} from '@expo/vector-icons'
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import {useNavigation, NavigationProp} from '@react-navigation/native'

export default function Login (){

    const navigation = useNavigation<NavigationProp<any>>()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading,setLoading] = useState(false)
    

    async function getLogin(){
        try{

            setLoading(true)
            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatorios')
            }
        } catch(error) {
            console.log(error)
        }
    }

    async function getForgotPassword() {
        navigation.navigate('ForgotPassword')
    }

    return (
            <View style={style.container}>
               
                    <Image
                        source={require("../../assets/fundo.png")}
                        style={style.fundo}
                    />
                      <View style={style.boxTop}>
                    <Image
                    style={{position:'absolute',height:300,bottom:20,left:15}}
                    source={Logo}
                    resizeMode='contain'
                    />
                    </View>

                    <View style={{bottom:30}}>
                        <View style={style.boxMid}>
                        <Input
                            title='E-mail'
                            onChangeText={setEmail}
                        />
                        <View style={{ marginBottom: 60}} />
                        <Input
                            title='Senha'
                            value={password}
                            secureTextEntry={!showPassword}
                            onIconRigthPress={()=>setShowPassword(prev => !prev)}
                            onChangeText={setPassword}
                            IconRigth={MaterialIcons}
                            iconRigthName={showPassword?'visibility':'visibility-off'}
                        />
                        
                        <TouchableOpacity style={{top:10}} onPress={getForgotPassword}>
                            <Text style={{fontWeight:'bold'}}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={style.boxBottom}>
                    <Button
                        text="Login"
                        loading={loading}
                        onPress={()=>getLogin()}
                    />
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>Não tem conta? Crei a sua agora!</Text>
                        <View />
                    </TouchableOpacity>  
                    
                </View>
            
                
            </View>
    )
}