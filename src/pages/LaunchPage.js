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
            AsyncStorageUtils.get("isLogin")
                .then((value) => {
                    // 如果找到数据，则在then方法中返回
                    // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
                    // 你只能在then这个方法内继续处理ret数据
                    // 而不能在then以外处理
                    //alert(value);
                    if (value == true) {
                        //用户已经登录
                        navigation.navigate("MainPage");
                    } else {
                        navigation.navigate("LoginPage");
                    }
                }).catach((error) => {
                    //如果没有找到数据且没有sync方法，
                    //或者有其他异常，则在catch中返回
                    navigation.navigate("LoginPage");
                });

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




