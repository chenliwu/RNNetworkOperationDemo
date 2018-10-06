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
import PersonalStack from '../component/PersonalScreen';

const AppTabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Personal: PersonalStack,
    },
    {
        backBehavior: "none",   //控制 "返回" 按钮是否会导致 Tab 页切换到初始 Tab 页? 如果是, 设置为 initialRoute, 否则 none。 默认为 initialRoute的行为。
    }
);

export default class MainPage extends React.Component {
    render() {
        return (
            <AppTabNavigator></AppTabNavigator>
        );
    }
}


