import { StackActions } from "@react-navigation/native";
import React from "react";
import { View, Button} from "react-native";
import {Text} from 'native-base';
import Screen4 from "./Screen4";

export default function Screen3({ navigation }) {
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
        <Text fontSize={80}>Screen 3</Text>
        <Button
          title="Go to Screen 4"
          onPress={() => navigation.navigate(Screen4)}
        />
     </View>
    );
  }