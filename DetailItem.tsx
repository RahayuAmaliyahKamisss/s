import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Definisikan ParamList di sini
type ParamList = {
  Home: undefined;
  DetailItem: { itemId: number }; // Parameter untuk DetailItem
  Order: undefined;
  Onboarding: undefined; 
};

// Tipe Props untuk DetailItem
type DetailItemProps = {
  navigation: StackNavigationProp<ParamList, 'DetailItem'>;
  route: { params: { itemId: number } }; // Mengambil parameter dari route
};

// Komponen DetailItem
const DetailItem: React.FC<DetailItemProps> = ({ navigation, route }) => {
  const { itemId } = route.params; // Mengambil itemId dari parameter

  return (
    <View style={styles.container}>
      <Text>Detail of Product {itemId}</Text>
      <Button title="Order Now" onPress={() => navigation.navigate('Order')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailItem;
