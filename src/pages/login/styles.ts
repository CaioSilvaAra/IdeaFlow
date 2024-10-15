import { Dimensions,StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
        
    },
    fundo:{
        position:'absolute',
        height:'100%',
        
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:"100%",
        justifyContent:'center'
    },
    
    boxMid:{
        height:Dimensions.get('window').height/3,
        width:"100%",
        paddingHorizontal: 20,
        justifyContent:'center',
        bottom:20
    },
    boxButton:{
        width:"100%",
        alignItems:'center',
        bottom:35,
        margin:20
        
    },

})