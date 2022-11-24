import React from "react";
import { View, Button} from "react-native";
import {Text} from 'native-base';

export default function Screen1({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text fontSize={80} >Screen 1</Text>
        <Button
          title="Go to Screen 2"
          onPress={() => navigation.navigate('Screen2')}
        />
         <Button
          title="Go to Screen 3"
          onPress={() => navigation.navigate('Screen3')}
        />
         <Button
          title="Go to Screen 4"
          onPress={() => navigation.navigate('Screen4')}
        />
      </View>
    );
  }