import React from 'react'
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text } from 'react-native'
import { style } from './styles'

type Props = TouchableHighlightProps & {
  onPress: () => void
}

export function Goback({ onPress, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={style.gobackButton} {...rest}>
      <Text style={style.gobackText}>&lt; Voltar ao Login</Text>
    </TouchableOpacity>
  )
}
