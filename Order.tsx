// Order.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Definisikan ParamList di sini
type ParamList = {
  Home: undefined;
  DetailItem: { itemId: number };
  Order: undefined; // Tidak ada parameter untuk Order
  Onboarding: undefined; 
};

// Tipe Props untuk Order
type OrderProps = {
  navigation: StackNavigationProp<ParamList, 'Order'>;
};

// Komponen Order
const Order: React.FC<OrderProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Page</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

// Gaya untuk Order
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

export default Order;
