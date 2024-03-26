import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

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
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/SerhiiHrushevitskiy/MobileLabs/master/data/home.json')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Помилка завантаження даних:', error));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {news.map(item => (
        <View key={item.id} style={styles.newsContainer}>
          <Image style={styles.newsImage} source={{ uri: item.image }} />
          <View style={styles.newsTextContainer}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDate}>{item.date}</Text>
            <Text style={styles.newsExcerpt}>{item.excerpt}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default Home;
