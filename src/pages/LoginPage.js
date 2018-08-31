import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Dimensions
} from 'react-native';

import axios from 'axios';


export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        //记录账号密码
        this.state = {
            username: "",
            password: "",
        };
    }

    /**
    * 登录方法
    */
    _login = () => {
        let account = this.state.account;
        let password = this.state.password;
        //alert(account + "," + password);
        if(!account){
            alert("请输入账号");
            return;
        }
        if(!password){
            alert("请输入密码");
            return;
        }

        // 为给定 ID 的 user 创建请求
        axios.get('http://10.0.2.2:8099/MySSM/api/user/login?username='+account+'&password='+password)
            .then(function (response) {
                alert(response);
            })
            .catch(function (error) {
                alert(error);
            });

    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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



