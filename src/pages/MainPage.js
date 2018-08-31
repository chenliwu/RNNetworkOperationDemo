import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {
    createBottomTabNavigator
} from 'react-navigation';

import HomeStack from './../component/HomeScreen';
import PersonalStack from './../component/PersonalScreen';

const AppTabNavigator = createBottomTabNavigator(
    {
        Home:HomeStack,
        Personal:PersonalStack,
    },
    {

    }
);

export default class MainPage extends React.Component{
    render(){
        return (
            <AppTabNavigator></AppTabNavigator>
        );
    }
}


