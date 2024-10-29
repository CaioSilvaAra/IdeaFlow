import React, { useState } from 'react';
import { TextInput, TouchableHighlightProps } from 'react-native-gesture-handler';
import { style } from './styles';

type Props = TouchableHighlightProps & {
  initialText?: string; // Texto inicial (opcional)
  onChangeText: (text: string) => void; // Função para lidar com mudanças de texto
};

export function BoxNote({ initialText = '', onChangeText, ...rest }: Props) {
  const [text, setText] = useState(initialText);

  const handleTextChange = (newText: string) => {
    setText(newText);
    onChangeText(newText); // Chama a função passada para atualizar o texto
  };

  return (
    <TextInput
      style={style.title}
      value={text} // Define o valor do TextInput
      onChangeText={handleTextChange} // Atualiza o texto ao digitar
      multiline={true} // Permite múltiplas linhas
      {...rest} // Propaga outras propriedades
    />
  );
}
