import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { TouchableHighlightProps } from 'react-native-gesture-handler'
import { style } from './styles'
import LinearGradient from 'react-native-linear-gradient'

type Props = TouchableHighlightProps & {
  text: string
}

export function BoxNote({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Text style={style.title}>{rest.text}</Text>
    </TouchableOpacity>
  )
}
