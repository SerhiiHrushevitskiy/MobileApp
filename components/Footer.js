import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    backgroundColor: "gray",
    paddingBottom: 10,
    width: '100%',
    fontSize: 16,
    position: 'absolute',
    bottom: 0,
  },
  textHeader:{
    fontSize: 16,
  }
});

const Footer = () => {
  return (
    <>
       <View style={styles.container}>
            <Text style={styles.textHeader}>Грушевицький Сергій Віталійович ІПЗ-20-3</Text>
       </View>
    </>
  );
};

export default Footer;
