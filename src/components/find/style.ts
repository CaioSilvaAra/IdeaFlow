import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  boxInput: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 50,
    flexDirection: 'row', //usado para deixar o que tiver dentro da View, lada a lada
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor:'black'
    
  },
  input: {
    height: 50,
    width: '90%',
    borderRadius: 10,
    color:'white'
  },
  icon: {
    width: '100%',
  },
})
