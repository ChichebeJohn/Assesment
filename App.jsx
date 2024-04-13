import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './Screens/TabNavigation/Menu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './Screens/TabNavigation/Cart';
import Account from './Screens/TabNavigation/Account';
import Home from './Screens/TabNavigation/Home';
import HomeTabIcon from './components/HomeTapIcon';
import ShoppingBagIcon from './components/ShoppingBag';
import CartIcon from './components/CartIcon';
import MenuTabIcon from './components/MenuTabIcon';
import AccountTabIcon from './components/AccountTabIcon';
import BackButton from './components/BackButton';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color, size }) => (<HomeTabIcon color={color} size={size} /> )}} />
      <Tab.Screen name="Menu" component={Menu}  options={{tabBarIcon:({color, size}) => (<MenuTabIcon color={color} size={size} />),headerLeft:() => <BackButton />}}/>
      <Tab.Screen name="Cart" component={Cart}  options={{tabBarIcon:({color, size}) => (<CartIcon color={color} size={size} />)}}/>
      <Tab.Screen name="Account" component={Account}  options={{tabBarIcon:({focused, color, size}) => ( <Image
      source={require('./assets/AccountIcon.png')}
      style={{width:size, height:size}}
      resizeMode='contain'
      />
      )}}/>

    </Tab.Navigator>
    </NavigationContainer>

     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
