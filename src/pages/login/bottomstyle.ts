import { Dimensions,StyleSheet } from "react-native";

export const bottomStyle = StyleSheet.create({
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:"100%",
        backgroundColor:'green',
        justifyContent:'center'
    }
})