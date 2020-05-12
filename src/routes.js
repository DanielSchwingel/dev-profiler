import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Search from './pages/Search';
import Profile from './pages/Profile';
import Repositories from './pages/Repositories';

export default function Routes() {
    return (
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false}}>
            <AppStack.Screen name="Search" component={Search} />
            <AppStack.Screen name="Profile" component={Profile} />
            <AppStack.Screen name="Repositories" component={Repositories} />
        </AppStack.Navigator>
    </NavigationContainer>
    );
}