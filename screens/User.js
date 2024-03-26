import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: "100%",
    },
    input: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 30, 
        padding: 10,
        width: '90%',
        marginBottom: 10,
      },
      button: {
        backgroundColor: '#000',
        width: '100%',
      },
    });

const User = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
  
    const handleRegister = () => {
        setPassword("");
        setEmail("");
        setLastName("");
        setFirstName("");
    };
    
    return (
      <>
         <View style={styles.container}>
        <Text style={{ fontSize: 24, marginTop: 10, marginBottom: 10 }}>Реєстрація</Text>
        <TextInput
          style={styles.input}
          placeholder="Електронна пошта"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Прізвище"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Ім'я"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Button title="Зареєструватися" style={styles.button} onPress={handleRegister} />
      </View>  
      </>
    );
  }
  export default User;
