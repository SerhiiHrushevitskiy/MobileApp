import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    newsContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
      },
      newsImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 5,
      },
      newsTextContainer: {
        flex: 1,
      },
      newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      newsDate: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
      },
      newsExcerpt: {
        fontSize: 16,
      },
    });

const Home = () => {
    const numNews = 10; 

  return (
    <ScrollView contentContainerStyle={styles.container}>
        {[...Array(numNews)].map((_, index) => (
          <View key={index} style={styles.newsContainer}>
            <Image
              style={styles.newsImage}
              source={require('../assets/gallery.png')} 
            />
            <View style={styles.newsTextContainer}>
              <Text style={styles.newsTitle}>Новина {index + 1}</Text>
              <Text style={styles.newsDate}>Дата новини</Text>
              <Text style={styles.newsExcerpt}>Короткий текст новини...</Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
}
export default Home;
