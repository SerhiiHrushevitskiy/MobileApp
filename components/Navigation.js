import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "gray",
    paddingBottom: 20,
    width: '100%',
    alignItems: 'center', 
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
  textHeader:{
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  navItem: {
    alignItems: 'center',
  },
});

const HomeScreen = () => {
  const numNews = 5; 

  return <>
    <View style={styles.container}>
      {[...Array(numNews)].map((_, index) => (
      <View style={styles.newsContainer}>
        <Image style={styles.tinyLogo} source={require('./assets/galery.png')} />
        <View style={styles.newsTextContainer}>
          <Text style={styles.textHeader}>Заголовок новини </Text>
          <Text style={styles.textHeader}>Дата новини</Text>
          <Text style={styles.textHeader}>Короткий текст новини ...</Text>
        </View>
      </View>
      ))}
    </View>
      </> 
}
const Profile = () => {
  
  return <>
  <View><Text>1111</Text></View>
  </> 
}

const Navigation = () => {
  return (
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'gray',
        paddingTop: 20,
        paddingBottom: 20,
      },
      labelStyle: {
        fontSize: 16,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{              
          tabBarLabel: 'Головна',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/home.png') : require('./assets/home.png')}
              style={styles.tinyLogo}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarLabel: 'Профіль',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/user.png') : require('./assets/user.png')}
              style={styles.tinyLogo}
            />
          ),
        }}
      />
       {/* <View style={styles.container}>
            <View style={styles.navItem}>
                <Image style={styles.tinyLogo} source={require('./assets/home.png')} />
                <Text style={styles.textHeader}>Головна</Text>
            </View>
            <View style={styles.navItem}>
                <Image style={styles.tinyLogo} source={require('./assets/galery.png')} />
                <Text style={styles.textHeader}>Фотогалерея</Text>
            </View>
            <View style={styles.navItem}>
                <Image style={styles.tinyLogo} source={require('./assets/user.png')} />
                <Text style={styles.textHeader}>Профіль</Text>
            </View>
       </View> */}
       </Tab.Navigator>

  );
};

export default Navigation;