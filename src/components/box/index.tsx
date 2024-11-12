import React, { useState } from 'react'
import { TextInput, TouchableHighlightProps } from 'react-native-gesture-handler'
import { style } from './styles'
import { Text, TouchableOpacity } from 'react-native'

type Props = TouchableHighlightProps & {
  initialText?: string // Texto inicial (opcional)
  onChangeText: (text: string) => void // Função para lidar com mudanças de texto
}

export function BoxNote({ initialText = '', onChangeText, ...rest }: Props) {
  const [text, setText] = useState(initialText)
  const [isFocused, setIsFocused] = useState(false) // Estado para controlar o foco
  const [dimensions, setDimensions] = useState({ height: 200, width: 150 }) // Defina a altura e largura iniciais

  const handleTextChange = (newText: string) => {
    setText(newText)
    onChangeText(newText)
  }

  const handleFocus = () => {
    setIsFocused(true)
    setDimensions({ height: 150, width: 340 }) // Aumenta a altura e a largura quando o input estiver em foco
  }

  const handleBlur = () => {
    setIsFocused(false)
    setDimensions({ height: 200, width: 150 }) // Volta à altura e largura iniciais quando o foco for perdido
  }

  return (
    <TextInput
      style={[style.title, { height: dimensions.height, width: dimensions.width }]} // Aplica as dimensões dinâmicas
      placeholder="Escreva sua ideia"
      value={text} // Define o valor do TextInput
      onChangeText={handleTextChange} // Atualiza o texto ao digitar
      multiline={true} // Permite múltiplas linhas
      onFocus={handleFocus} // Aumenta as dimensões quando o input for focado
      onBlur={handleBlur} // Restaura as dimensões quando o foco for perdido
      {...rest} // Propaga outras propriedades
    />
  )
}
