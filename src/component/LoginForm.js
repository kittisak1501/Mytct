import React, { Component } from 'react';
import { View, Text, 
    TextInput, Button
} from 'react-native';
import LoginPage from './LoginPage';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            Password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = ({ email}) => {
        console.log(email);
        this.setState({ email });
    }

    onSubmit() {
        console.log('onSubmit', this.state);
    }
    render() {
        return (

            <View style={{ padding: 10}}>
                <Text>Login</Text>
                <TextInput
                    style={{padding: 5, height: 40, borderColor: 'green'}}
                    placeholder='Email'
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />

                <TextInput
                    style={{padding: 5, marginTop: 5, height: 40, borderColor: 'red', marginTop: 10}}
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={(Password) => this.setState({Password})}
                    value={this.state.Password}
                />
                <Button
                    title="Login"
                    onPress={this.onSubmit}
                />
            </View>

        );
    }
}

export default LoginForm;