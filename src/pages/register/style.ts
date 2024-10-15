import { Dimensions,StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
        
    },

    boxTop:{
        height:Dimensions.get('window').height/7,
        width:"90%",
        bottom:300,
    },

    input:{
        flexDirection: 'column',
        justifyContent: 'flex-start', // Distribui o espaço 
        top:100,
        
    },
    inputitem:{
        marginBottom:20
    }
    
   
})