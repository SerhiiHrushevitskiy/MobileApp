import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    backgroundColor: "white",
    paddingBottom: 20,
    width: '100%',
  },
  tinyLogo: {
    width: 75,
    height: 75,
  },
  textHeader:{
    marginTop: 20,
    fontSize: 24,
  }
});

const Header = () => {
  return (
    <>
       <View style={styles.container}>
            <Image style={styles.tinyLogo} source={require('../assets/favicon.png')} />
            <Text style={styles.textHeader}>MobileApp</Text>
       </View>
    </>
  );
};

export default Header;
