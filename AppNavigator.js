import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Используйте react-native-vector-icons, если не работает с Expo

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import SupportScreen from './screens/SupportScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab Navigator для главного приложения
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Главная') {
            iconName = 'home';
          } else if (route.name === 'История') {
            iconName = 'history';
          } else if (route.name === 'Поддержка') {
            iconName = 'support-agent';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          height: 60,
        },
        headerShown: false, // Убираем верхний хедер
      })}
    >
      <Tab.Screen name="Главная" component={HomeScreen} />
      <Tab.Screen name="История" component={HistoryScreen} />
      <Tab.Screen name="Поддержка" component={SupportScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator для логина и приложения
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
