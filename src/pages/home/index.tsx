import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { style } from './style'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SubTitle, TitleText } from '../../components/text'
import { Find } from '../../components/find'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { BoxNote } from '../../components/box'

export default function Home() {
  const [notes, setNotes] = useState([{ id: Date.now(), text: 'Escreva sua ideia' }]) // Inicializa com uma nota

  const addNote = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now(), text: 'Escreva sua ideia' }, // Adiciona nova nota
    ])
  }

  const handleNotaChange = (id, newText) => {
    setNotes((prevNotes) => prevNotes.map((note) => (note.id === id ? { ...note, text: newText } : note)))
  }

  return (
    <View style={style.container}>
      <Image source={require('../../assets/fundo2.png')} style={style.fundo} />

      <View style={style.boxTop}>
        <Find
          placeholder="Search your note..."
          placeholderTextColor={'white'}
          textAlign="center"
          IconLeft={MaterialIcons}
          iconLeftName={'menu'}
          IconRigth={MaterialIcons}
          iconRigthName={'supervised-user-circle'}
        />
      </View>

      <View style={style.boxTitle}>
        <View style={{ alignItems: 'center' }}>
          <TitleText title="Start Your Journey" />
        </View>
        <View style={{ alignItems: 'center' }}>
          <SubTitle title="Every big step starts with a small step." />
          <SubTitle title="Notes your first idea and start" />
          <SubTitle title="your journey!" />
        </View>
      </View>

      <ScrollView 
        style={{ height: '70%', marginBottom: 100, marginTop: 150 }} // Ajuste a altura aqui
      >
        <View style={{
          
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '100%', 
          padding: 10,
          gap:10
        }}>
          {notes.map((note) => (
            <BoxNote
              key={note.id}
              initialText={note.text}
              onChangeText={(newText) => handleNotaChange(note.id, newText)}
            />
          ))}
        </View>
      </ScrollView>

      <View style={style.boxBottom}>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={addNote}>
            <AntDesign name="pluscircle" size={60} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
