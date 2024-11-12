import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { style } from './style'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SubTitle, TitleText } from '../../components/text'
import { Find } from '../../components/find'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { BoxNote } from '../../components/box'
import { useNavigation, NavigationProp } from '@react-navigation/native'

export default function Home() {
  const [notes, setNotes] = useState([]) // Inicializa sem notas visíveis
  const [showNotes, setShowNotes] = useState(false) // Estado para controlar a visibilidade das notas
  const [expandedNoteId, setExpandedNoteId] = useState(null)
  const navigation = useNavigation<NavigationProp<any>>()

  const addNote = () => {
    // Exibe as notas e adiciona uma nova
    setShowNotes(true)
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now() }, // Adiciona nova nota
    ])
  }

  const handleNotaChange = (id, newText) => {
    setNotes((prevNotes) => prevNotes.map((note) => (note.id === id ? { ...note, text: newText } : note)))
  }
  const toggleExpandNote = (id) => {
    setExpandedNoteId((prevId) => (prevId === id ? null : id))
  }

  

  async function getnavegacao() {
    navigation.navigate('Navegacao')
  }

  return (
    <View style={style.container}>
      <Image source={require('../../assets/fundo2.png')} style={style.fundo} />

      <View style={style.boxTop}>
        <Find
          placeholder="Search your note..."
          placeholderTextColor={'white'}
          cursorColor={'white'}
          textAlign="center"
          IconLeft={MaterialIcons}
          iconLeftName={'menu'}
          onIconLeftPress={() => {
            // Ao clicar no ícone, abre o Drawer
            navigation.DrawerRoutes()
          }}
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

      {showNotes && ( // Verifica se deve mostrar as notas
        <ScrollView style={{ height: '70%', marginBottom: 100, marginTop: 300, top: 30 }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              width: '100%',
              padding: 10,
              gap: 10,
            }}
          >
            {notes.map((note) => (
              <TouchableOpacity key={note.id} onPress={() => toggleExpandNote(note.id)}>
                <BoxNote initialText={note.id} onChangeText={(newText) => handleNotaChange(note, newText)}></BoxNote>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <View style={style.boxBottom}>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={addNote}>
            <AntDesign name="pluscircle" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
