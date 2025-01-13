import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles'; // Используйте правильный путь

const ProfileScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;