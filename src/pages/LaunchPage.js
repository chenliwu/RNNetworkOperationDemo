import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';

import AsyncStorageUtils from './../utils/AsyncStorageUtils';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
/**
 * 启动页面
 * 如果用户已经登录则跳转到主页
 * 如果用户未登录则跳转到登录页面
 */
class LaunchPage extends React.Component {

    constructor(props) {
        super(props);
        var { navigation } = this.props;
        let timer = setTimeout(() => {
            //alert(AsyncStorageUtils.get("isLogin"));
            if (AsyncStorageUtils.get("isLogin") == true) {
                //用户已经登录
                navigation.navigate("MainPage");
            } else {
                navigation.navigate("LoginPage");
            }
        }, 2000)
    }

    render() {
        return (
            <View>
                <Text>这是Lacunch页面</Text>
            </View>
        );
    }
}

const MySwitchNavigator = createSwitchNavigator(
    {
        LaunchPage: LaunchPage,
        LoginPage: LoginPage,
        MainPage: MainPage,
    }, {
        initialRouteName: "LaunchPage",
    }
);

export default MySwitchNavigator;




