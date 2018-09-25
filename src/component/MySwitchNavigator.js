import React from 'react';
import { 
    View
 } from 'react-native';
 import {
    createSwitchNavigator
 } from 'react-navigation';

import LoginPage from './../pages/LoginPage';
import MainPage from './../pages/MainPage';


const MySwitchNavigator = createSwitchNavigator(
    {
        LoginPage:{
            screen:LoginPage,
        },
        MainPage:MainPage,
    },
    {
        initialRouteName:"LoginPage",
    }
);

export default class App extends React.Component{
    render(){
        return (
            <MySwitchNavigator/>
        )
    }
}




