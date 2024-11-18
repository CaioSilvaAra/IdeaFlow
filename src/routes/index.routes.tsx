import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import MakePassword from "../pages/makePassword";
import CodePassword from "../pages/codePassword";
import ForgotPassword from "../pages/forgotPassword";
import Register from "../pages/register";

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CodePassword" component={CodePassword} />

      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MakePassword" component={MakePassword} />
    </Stack.Navigator>
  );
}
