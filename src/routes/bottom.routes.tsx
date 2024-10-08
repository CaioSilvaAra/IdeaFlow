import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../pages/login';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Login" 
        component={Login}
      />
      
    </Tab.Navigator>
  );
}