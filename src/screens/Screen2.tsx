import { StackActions } from "@react-navigation/native";
import React from "react";
import { View, Button} from "react-native";
import {Text} from 'native-base';
import Screen3 from "./Screen3";

export default function Screen2({ navigation }) {
   /*
    React.useEffect(
      () =>
        navigation.addListener('blur', () =>
          navigation.dispatch(StackActions.popToTop())
        ),
      []
    );
    */
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text fontSize={80}>Screen 2</Text>
        <Button
          title="Go to Screen 3"
          onPress={() => navigation.navigate(Screen3)}
        />
      </View>
    );
  }