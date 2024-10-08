import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import forgotPassword from "../pages/forgotPassword";
import register from "../pages/register";



export default function Routes(){
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="ForgotPassword" component={forgotPassword}/>
            <Stack.Screen name="Register" component={register}/>
        </Stack.Navigator>
    )
}