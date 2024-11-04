import './gesture-handler'
import 'react-native-gesture-handler'
import Routes from './src/routes/index.routes'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerRoutes from './src/routes/drawer.routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      
    </NavigationContainer>
  )
}
const Drawer = createDrawerNavigator();

