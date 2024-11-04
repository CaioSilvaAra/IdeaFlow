import { createDrawerNavigator } from "@react-navigation/drawer";
import Routes from "./index.routes";
import User from "../pages/User";
const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Usuario'
                component={User}
            />
        </Drawer.Navigator>
    )
}