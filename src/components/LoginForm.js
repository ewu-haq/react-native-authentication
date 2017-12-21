import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { CardSection, Card, Button, Input } from './common/index';
export default class LoginForm extends React.Component {
    state = { 
        email: '',
        password: '' 
    }

    onButtonPress() {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    render() {
        return (
            <Card>
                <CardSection> 
                    <Input
                        placeholder='something@mail.com'
                        label='Email'
                        value= {this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder='password'
                        label='Password'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} 
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}