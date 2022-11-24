import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme, Icon, HStack,  View} from 'native-base';
import {Text, Button} from 'react-native';

import {  House, Package, Users as Usuarios, Truck, Wrench } from 'phosphor-react-native'

import Home  from '../screens/Home';

import  Inventario  from '../screens/Home';
import  Viatura  from '../screens/Home';
import  Users  from '../screens/Home';
import  Tarefa  from '../screens/Home';



import { Header } from '../components/Header';
import { StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppTab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();


import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
  


export default function AuthRoutes() {
    

    const { colors } = useTheme();


   
    return(
        <>
           <HStack>
                <Header />
            </HStack>


        <AppTab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard:true,
                tabBarActiveTintColor: colors.green[700],
                tabBarInactiveTintColor: colors.gray[600],
                tabBarLabelPosition: 'below-icon',
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: colors.primary[700],
                tabBarStyle:{
                    height:60,
                    position:'absolute',
                    bottom: 16,
                    right:16,
                    left:16,
                    borderRadius: 16,
                },
                headerShown: false,
                tabBarItemStyle:{
                    borderRadius: 10,
                    alignItems:'center',
                    padding: 6, 
                },

            }}
            initialRouteName='Login'>
                <AppTab.Screen 
                    name='Inicio'
                    component={Home}
                    options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<House color={color} size={size}/>} />
                        )),
                    }}
                />

                
                    <AppTab.Screen name='Viatura' options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Truck color={color} size={size}/>} />
                        ))
                    }}>
                    {() => (
                        <SettingsStack.Navigator screenOptions={{headerShown:false}} initialRouteName={'Screen1'}>
                        <SettingsStack.Screen name="Screen1"  component={Screen1} />
                        <SettingsStack.Screen name="Screen2" component={Screen2} />
                        <SettingsStack.Screen name="Screen3" component={Screen3} />
                        <SettingsStack.Screen name="Screen4" component={Screen4} />
                        </SettingsStack.Navigator>
                    )}
                    </AppTab.Screen>

                <AppTab.Screen 
                    name='Tarefa'
                    component={Tarefa}
                    options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Wrench color={color} size={size}/>} />
                        ))
                    }}
                />


                <AppTab.Screen 
                    name='Inventario'
                    component={Inventario}
                    options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Package color={color} size={size}/>} />
                        ))
                    }}
                />

                <AppTab.Screen 
                    name='Usuarios'
                    component={Users}
                    options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Usuarios color={color} size={size}/>} />
                        ))
                    }}
                />

                

        </AppTab.Navigator>
        </>
    )
}
