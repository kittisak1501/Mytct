import React, { Component } from 'react';
import { Text } from 'react-native';
import LoginForm from './LoginForm';

//const LoginPage = () => <Text>LoginPage</Text>;

class LoginPage extends Component{
    render(){
        return(
            <LoginForm/>
        );
    }
}
export default LoginPage;