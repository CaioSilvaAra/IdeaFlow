import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import User from '../pages/user'
import List from '../pages/list'

const Tab = createBottomTabNavigator()

export default function BottomRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  )
}
