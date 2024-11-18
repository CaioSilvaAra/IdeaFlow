import { Dimensions, StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  button: {
    width: '90%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAFA',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    flexDirection: 'row',
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1,
  },

  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
