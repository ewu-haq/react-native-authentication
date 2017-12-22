import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { CardSection, Card, Button, Input, Spinner } from './common/index';
export default class LoginForm extends React.Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress() {
        const {email, password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: 'Authentication Failed.'})
                    })
            });
    }

    renderLogInButton() {
        if (this.state.loading == true ){
            return <Spinner size='small'/>
        }
        else {
            return <Button onPress={this.onButtonPress.bind(this)}> Log In </Button>
        }
    }

    render() {
        return (
            <Card>
                <CardSection> 
                    <Input
                        placeholder='something@mail.com'
                        label='Email'
                        value= {this.state.email}
                        onChangeText={email => this.setState({ email: email, error: '' })}
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

                <Text style={styles.errorTextStyle}> 
                    {this.state.error} 
                </Text>

                <CardSection>
                    {this.renderLogInButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf:'center'
    }
}