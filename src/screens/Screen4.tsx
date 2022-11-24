import { StackActions } from "@react-navigation/native";
import React from "react";
import { View, Button} from "react-native";
import {Text} from 'native-base';

export default function Screen4({ navigation }) {
   
    React.useEffect(
      () =>
        navigation.addListener('blur', () =>
          navigation.dispatch(StackActions.popToTop())
        ),
      []
    );
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text fontSize={80}>Screen 4</Text>
     </View>
    );
  }