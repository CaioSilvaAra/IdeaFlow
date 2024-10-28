import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import { style } from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SubTitle, TitleText } from '../../components/text'
import { Find } from '../../components/find'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import LinearGradient from 'react-native-linear-gradient'
import { BoxNote } from '../../components/box'

export default function Home() {
  const [notes, setNotes] = useState([{ id: Date.now(), text: 'ola' }]) // Inicializa com uma nota

  const addNote = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now(), text: 'ola' }, // Adiciona nova nota
    ])
  }
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
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

      <View style={style.box}>
        {notes.map((note) => (
          <BoxNote key={note.id} text={note.text} onDelete={() => deleteNote(note.id)} />
        ))}
      </View>

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
