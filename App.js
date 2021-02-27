import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import Booktransaction from "./screens/Booktransaction";
import Searchscreen from "./screens/Searchscreen";
export default function App() {
  return (
    <View style={styles.container}>
      <appcontainer/>
    </View>
  );
}

const tabnavigator = createBottomTabNavigator({
   Transaction:{screen:Booktransaction},
   Search:{screen:Searchscreen}
});
const appcontainer = createAppContainer(tabnavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
