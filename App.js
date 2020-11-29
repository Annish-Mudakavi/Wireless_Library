import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from'react-navigation-tabs';
import {TransactionScreen} from './screen/BookTransactionScreen';
import {SearchScreen} from './Screen/SearchScreen';
import {createAppConatiner} from 'react-navigation';

export default class App extends React.Component {
  render(){
    return (
    <AppContainer /> 
  );
    }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen : TransactionScreen},
  search : {screen : SearchScreen}
});

const AppContainer = createAppConatiner(TabNavigator)
