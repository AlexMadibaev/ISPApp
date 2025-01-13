import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, Dimensions } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const correctEmail = 'admin';
    const correctPassword = 'admin';
    if (email === correctEmail && password === correctPassword) {
      navigation.replace('Home');
    } else {
      Alert.alert('Ошибка', 'Неверный логин или пароль');
    }
  };

  return (
    <View style={styles.container}>
      {/* Логотип */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      
      {/* Заголовок */}
      <Text style={styles.title}>Приветствую!</Text>
      
      {/* Поле Email */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Почта"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#888"
        />
      </View>
      
      {/* Поле Password */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#888"
        />
      </View>
      
      {/* Кнопка Войти */}
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Войти</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: wp(5), // 5% ширины экрана
  },
  logo: {
    width: wp(30), // 30% ширины экрана
    height: wp(30), // 30% ширины экрана
    marginBottom: hp(2), // 2% высоты экрана
  },
  title: {
    fontSize: wp(6), // 6% ширины экрана
    color: '#007BFF',
    marginBottom: hp(2), // 2% высоты экрана
    fontWeight: 'bold',
  },
  inputContainer: {
    width: wp(90), // 90% ширины экрана
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 10,
    marginBottom: hp(2), // 2% высоты экрана
    paddingHorizontal: wp(4), // 4% ширины экрана
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  input: {
    flex: 1,
    height: hp(5), // 5% высоты экрана
    fontSize: wp(4), // 4% ширины экрана
    color: '#000',
  },
  button: {
    width: wp(90), // 90% ширины экрана
    paddingVertical: hp(1.5), // 1.5% высоты экрана
    backgroundColor: '#007BFF',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: wp(4.5), // 4.5% ширины экрана
    fontWeight: 'bold',
  },
});

export default LoginScreen;