import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from '../pages/login'
import forgotPassword from '../pages/forgotPassword'
import register from '../pages/register'
import MakePassword from '../pages/makePassword'
import Home from '../pages/home'
import User from '../pages/User'

function DrawerRoutes() {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator initialRouteName="User">
      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  )
}

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
    </Stack.Navigator>
  )
}
