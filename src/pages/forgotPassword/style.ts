import { Dimensions,StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    boxTop:{
        height:Dimensions.get('window').height/4,
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        bottom:100
    },


    boxMid:{
        height:'20%',
        width:"95%",
        justifyContent:'center',
        top:100
        
        
    },
    boxBottom:{
        height:'25%',
        width:"95%",
        top:100,
 
    },
})