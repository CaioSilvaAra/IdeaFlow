import { Dimensions,StyleSheet } from "react-native";

export const midStyle = StyleSheet.create({

    boxMid:{
        height:Dimensions.get('window').height/4,
        width:"100%",
        backgroundColor:'gray',
        paddingHorizontal: 20,
        justifyContent:'center',
        

    },
    
    text:{
        fontWeight:'bold',
        fontSize:16,
        
    },

    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        marginTop:10,
        flexDirection:'row' //usado para deixar o que tiver dentro da View, lada a lada
    },

    input:{
        height:'100%',
        width:'100%',
        backgroundColor:'red'
    }

})