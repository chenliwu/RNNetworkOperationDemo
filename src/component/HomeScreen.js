import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import {
    createStackNavigator
} from 'react-navigation';

/**
 * 主页
 */
class HomeScreen extends React.Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>HomeScreen</Text>
            </View>
        );
    }

}

const HomeStack = createStackNavigator({
    Home:HomeScreen
});

export default HomeStack;


