import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import User from "./screens/User";

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    Indentation:{
      marginBottom: 40,
    }
  });

export default function App() {

  return <>
    <Header />
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Головна" component={Home} />
        <Tab.Screen name="Галерея" component={Gallery} />
        <Tab.Screen name="Профіль" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
    <View style={styles.Indentation} />
    <Footer />
  </>
}