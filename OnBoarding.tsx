// Onboarding.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Definisikan ParamList di sini
type ParamList = {
  Home: undefined; // Tidak ada parameter untuk layar Home
  DetailItem: { itemId: number }; // Contoh parameter untuk DetailItem
  Order: undefined; // Sesuaikan dengan layar lainnya
  Onboarding: undefined; // Tidak ada parameter untuk layar Onboarding
};

// Tipe Props untuk Onboarding
type OnboardingProps = {
  navigation: StackNavigationProp<ParamList, 'Onboarding'>; // Menyertakan Onboarding dalam ParamList
};

// Komponen Onboarding
const Onboarding: React.FC<OnboardingProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our Coffee Shop!</Text>
      <Button title="Next" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

// Gaya untuk Onboarding
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Onboarding;
