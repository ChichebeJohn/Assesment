import React from 'react';
import { View } from 'react-native';
import Cart from './Cart';

const ProductListScreen = () => {
  // Assuming you have a list of products
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    // Add more products here as needed
  ];

  return (
    <View>
      {/* Render the Cart component and pass the products array as a prop */}
      <Cart products={products} />
    </View>
  );
};

export default ProductListScreen;
