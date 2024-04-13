import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
import AddToCartButton from '../../components/AddToCartButton';
import RemoveFromCartButton from '../../components/RemoveFromCartButton';
import CheckoutButton from '../../components/CheckOutButton';

const Cart = () => {
  // State to manage the cart items
  const [cartItems, setCartItems] = useState([]);

  // Dummy product data
  const products = [
    { id: 1, name: 'Asaro (Yam porridge)', price: 30, image: "https://s3-alpha-sig.figma.com/img/8127/df7c/f3e1712529caa0b55e1663646c798fd3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gkgjO2BD8xzANeghNrxktHzyBrrUAhWJBA~2mH8ixVzVSvPARQyqreV6jTe9fhtW5-NoSjyu6rG7N6wBoVHJW1V8b9tR-G9fyK5Z~4c0dXKHsRkR3ZdvuZ2oDU36L8khGRVLWR3iDSqbdYJGbHM01XrFOGCkqpr0Jx6A9hsnZRAyOZo6XLT6LMTkmDb8nAXQURs8aC~a~5ATM4UKXga-oO2ffUcBaCGWznEeNbYeHKY-vkyzbcUEZoBzsWbwEDHXIOsirn~sjruKYjaMfyGWCTZatzHSygX9iuY2Jy~z5UvmVXl82VQfR6ocsktXYhZTeeOkNe8fowZrQNLAubfLKg__", },
    { id: 2, name: 'Moi Moi (Bean Cake)  ', price: 30, image: "https://s3-alpha-sig.figma.com/img/b214/a18b/d3ec955ef38ba3f36eef54ee1536faf6?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fS24MwRVRrF8klVy9-MiPJAQwn7BHv2wMhaqZ~vZ6U5mpv4Tjzsiz5FTuTWI2DTSyA8BuioP8t95GFpImoNldgKYzaBwWxALtTkUtbekKPfp3RSgK1JaYod6VKWG2I4GGRMOt0wWSs8wCa4ZHBGpdhkxyqgFsi5BTZs7-kdtyF~lZqmLdoHzB4aXn72zSstlkCEDAWYoWhhVTJh-sg5mXRS4J5f~0Pbw8HnlKk9s7nqjoh6bG5W9Fl6XqzymfziXyxNR1Zrwz6jFIJ~FhRb6VGUsh2daVLfxe7c3Z9~k8q41JpYWuRY--PVEwcXVBJszYC71IBoc1PGbOTWSTxgs-Q__", },
    { id: 3, name: 'Efo Riro                            ', price: 30, image: "https://s3-alpha-sig.figma.com/img/b9c6/c267/1723fca06277aa180afddf41cfc06065?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KmH2TGQUpe-rkLe-7LvPUDsz3HPq5d4HEUxnUoUdtWoSk-qSay9kYv-NHknDasX-bCCXnyvEVtiBhaYJxfpysa5JxSTlOAvn~orKGbiFEf0P9lYXGbEWZbJTC3tyZGtOL3ySt8pWp8RqhU~0YTF-De4gOcT4XeAA0lVXd0f-4ThJ~wFW4f3sb90xuBpWGKAE3LgM9hpL2n7d3ZY3wQlDoaLyYMBRZPxkscZYpyczEu5X4apAM-NBaMywFHWsthW0tK6RQQFokxaAm3hYIZdgbUy8VycDPsdHL9LlPeu-u0jOY-Ru2DPguRTmd6bG~~ZO50gBhldF3vWYocdZDwaj~A__" },
  ];

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  // Render item function for FlatList
  const renderItem = ({ item, index }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, gap: 10 }}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.name}{'\n'} {'\n'} </Text>
      <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 14, right: 130, alignContent: 'center', justifyContent: 'center', alignSelf: 'center' }}> £{item.price}</Text>
      <AddToCartButton onPress={() => addToCart(item)} />
      <RemoveFromCartButton onPress={() => removeFromCart(index)} />
    </View>
  );

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ marginTop: 20, }}>

        <Text>Total Items: {cartItems.length}</Text>
        <Text>Total Price: £{totalPrice}</Text>
        <CheckoutButton totalPrice={totalPrice} onPress={()=>console.log('Checkout pressed')} />
      </View>
      
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  image: {
    width: 70, // Adjust as needed
    height: 70, // Adjust as needed
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignSelf: "center",
    bottom: 3,
  }
});
