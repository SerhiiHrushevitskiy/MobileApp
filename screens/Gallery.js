import { StyleSheet, Image, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    containerGallery: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginBottom:50,
      },
      imageGalery: {
        marginTop: 10,
        margin: 5,
        width: '20%',
        aspectRatio: 1,
      },
    });

const Gallery = () => {
    const numImage = 40; 
  
    return (
      <ScrollView contentContainerStyle={styles.containerGallery}>
      {[...Array(numImage)].map((_, index) => (
        <Image style={styles.imageGalery} source={require('../assets/gallery.png')}  />
      ))}
      </ScrollView>
    );
  }
  export default Gallery;
