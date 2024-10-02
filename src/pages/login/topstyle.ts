import { Dimensions,StyleSheet } from "react-native";

export const topStyle = StyleSheet.create({
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:"100%",
        
        justifyContent:'center'
    }
})