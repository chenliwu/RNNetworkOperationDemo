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
 * 我的
 */
class PersonalScreen extends React.Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>PersonalScreen</Text>
            </View>
        );
    }

}

const PersonalStack = createStackNavigator({
    Home:PersonalScreen
});

export default PersonalStack;


