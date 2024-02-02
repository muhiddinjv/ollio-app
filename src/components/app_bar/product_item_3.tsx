import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductItem3 = ({ title, subtitle, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{subtitle}</Text>
      </View>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginHorizontal: 4
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default ProductItem3;
