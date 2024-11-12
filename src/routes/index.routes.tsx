import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/login'
import forgotPassword from '../pages/forgotPassword'
import register from '../pages/register'
import MakePassword from '../pages/makePassword'
import Home from '../pages/home'
import BottomRoutes from './bottom.routes'
import DrawerRoutes from './drawer.routes'

export default function Routes() {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={forgotPassword} />
      <Stack.Screen name="Register" component={register} />
      <Stack.Screen name="MakePassword" component={MakePassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes}/>
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes}/>
    </Stack.Navigator>
  )
}
