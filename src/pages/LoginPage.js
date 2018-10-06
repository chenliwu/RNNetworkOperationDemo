import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    ActivityIndicator,
    Dimensions
} from 'react-native';

import axios from 'axios';
import axiosInstance from './../utils/AxiosUtils';

import AsyncStorageUtils from './../utils/AsyncStorageUtils';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        //记录账号密码
        this.state = {
            username: "",
            password: "",
            animating: false
        };
    }

    // 按钮响应方法，切换显示与隐藏
    showOrHide() {
        if (this.state.animating) {
            this.setState({
                animating: false
            });
        } else {
            this.setState({
                animating: true
            });
        }
    }

    /**
    * 登录方法
    * 使用axios
    */
    _login = () => {
        let account = this.state.account;
        let password = this.state.password;
        //alert(account + "," + password);
        if (!account) {
            alert("请输入账号");
            return;
        }
        if (!password) {
            alert("请输入密码");
            return;
        }

        this.showOrHide();

        var { navigation } = this.props;

        setTimeout(function () {

            // 为给定 ID 的 user 创建请求
            // http://10.0.2.2:8099/MySSM/api/user/login
            axiosInstance.get('/api/user/login?username=' + account +
                '&password=' + password)
                .then(function (response) {
                    //alert(response.state+","+response.message);
                    alert(response.data.state + "," + response.data.message);
                    if (response.data.state === 200) {
                        //登录成功，跳转到主页
                        AsyncStorageUtils.save("isLogin", true);
                        navigation.navigate("MainPage");
                    }
                })
                .catch(function (error) {
                    alert(error);
                });
        }, 2000);
    }

    /**
     * 使用fetch
     */
    _login1 = () => {
        let account = this.state.account;
        let password = this.state.password;
        //alert(account + "," + password);
        if (!account) {
            alert("请输入账号");
            return;
        }
        if (!password) {
            alert("请输入密码");
            return;
        }
        fetch('http://10.0.2.2:8099/MySSM/api/user/login?username=' + account +
            '&password=' + password)
            .then(function (response) {
                //alert(response.json());
                alert(response.json().state + "," + response.json().message);
            })
            .catch(function (error) {
                alert(error);
            });
    }

    render() {
        // http://10.0.2.2:8099/MySSM/api/files/getImg
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Image
                    source={{ uri: "http://10.0.2.2:8099/MySSM/api/files/getImg" }}
                    style={{ width: 100, height: 100 }}></Image>

                <ActivityIndicator
                    animating={this.state.animating}
                    style={{
                        height: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 8,
                    }}
                    size="large" />

                <TextInput
                    style={{ width: Dimensions.get('window').width - 20 }}
                    placeholder="请输入账号"
                    onChangeText={(text) => {
                        //记录输入的账号
                        this.setState({ account: text });
                    }}></TextInput>
                <TextInput
                    style={{ width: Dimensions.get('window').width - 20 }}
                    placeholder="请输入密码"
                    onChangeText={(text) => {
                        //记录输入的密码
                        this.setState({ password: text });
                    }}></TextInput>
                <Button title="登录" onPress={() => {
                    this._login();
                }}></Button>
            </View>
        );
    }



}



