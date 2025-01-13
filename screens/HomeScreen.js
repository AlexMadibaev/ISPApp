import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Верхняя часть с балансом */}
      <View style={styles.balanceContainer}>
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/profile.png')} // Добавьте изображение профиля
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Александр</Text>
        </View>
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceText}>100 с.</Text>
          <Text style={styles.lastTopUpText}>Последнее пополнение: 26.11.2024</Text>
        </View>
        <View style={styles.balanceActions}>
          <Button mode="outlined" style={styles.actionButton} onPress={() => {}}>
            Пополнить
          </Button>
          <Button mode="outlined" style={styles.actionButton} onPress={() => {}}>
            История
          </Button>
        </View>
      </View>

      {/* Заголовок секции */}
      <Text style={styles.sectionTitle}>Остатки по пакетам</Text>

      {/* Карточки пакетов */}
      <View style={styles.packageCard}>
        <Text style={styles.packageTitle}>TTL ZUR-1</Text>
        <Text style={styles.packagePrice}>99 СМН/мес</Text>
        <Text style={styles.packageDescription}>До 20 дек / 24 дня</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: '88%' }]} />
          <Text style={styles.progressText}>88 234 мб</Text>
        </View>
      </View>

      <View style={styles.packageCard}>
        <Text style={styles.packageTitle}>TTL - TV</Text>
        <Text style={styles.packagePrice}>25 СМН/мес</Text>
        <Text style={styles.packageDescription}>До 20 дек / 24 дня</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: '50%', backgroundColor: 'orange' }]} />
          <Text style={styles.progressText}>50 000 мб</Text>
        </View>
      </View>

      <View style={styles.packageCard}>
        <Text style={styles.packageTitle}>Домашний</Text>
        <Text style={styles.packagePrice}>4 СМН/мес</Text>
        <Text style={styles.packageDescription}>До 20 дек / 24 дня</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: '10%', backgroundColor: 'green' }]} />
          <Text style={styles.progressText}>10 000 мб</Text>
        </View>
      </View>

      {/* Нижняя навигация */}
      <View style={styles.footerNav}>
        <Button onPress={() => navigation.navigate('History')}>История</Button>
        <Button onPress={() => navigation.navigate('Home')}>Главная</Button>
        <Button onPress={() => navigation.navigate('Support')}>Поддержка</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  balanceContainer: {
    backgroundColor: '#007BFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceInfo: {
    marginTop: 10,
    alignItems: 'center',
  },
  balanceText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  lastTopUpText: {
    color: '#fff',
    fontSize: 14,
  },
  balanceActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
    borderColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  packageCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  packageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  packagePrice: {
    fontSize: 14,
    color: '#888',
  },
  packageDescription: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    flex: 1,
  },
  progressText: {
    fontSize: 12,
    marginLeft: 10,
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default HomeScreen;
