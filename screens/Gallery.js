import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    containerGallery: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginBottom: 50,
    },
    imageGalery: {
        marginTop: 10,
        margin: 5,
        width: Dimensions.get('window').width / 3 - 10, // розрахунок ширини для відображення по три в рядку
        aspectRatio: 1,
    },
});

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/SerhiiHrushevitskiy/MobileLabs/master/data/gallery.json')
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Помилка завантаження даних:', error));
    }, []);

    // Функція для розділення масиву на групи по три
    const chunkArray = (array, chunkSize) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunkedArr.push(array.slice(i, i + chunkSize));
        }
        return chunkedArr;
    };

    return (
        <ScrollView contentContainerStyle={styles.containerGallery}>
            {/* Розділити масив на групи по три та вивести */}
            {chunkArray(images, 3).map((row, rowIndex) => (
                <View key={rowIndex} style={{ flexDirection: 'row' }}>
                    {row.map(item => (
                        <Image key={item.id} style={styles.imageGalery} source={{ uri: item.image }} />
                    ))}
                </View>
            ))}
        </ScrollView>
    );
}

export default Gallery;
