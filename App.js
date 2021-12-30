import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppointmentScreen from './src/screens/AppointmentScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Appointment" component={AppointmentScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
