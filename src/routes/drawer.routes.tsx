import { createDrawerNavigator } from '@react-navigation/drawer'
import navegacao from '../pages/navegacao'
import { NavigationContainer } from '@react-navigation/native'
const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Navegacao" component={navegacao} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
