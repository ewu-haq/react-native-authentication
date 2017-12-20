import React from 'react';
import { View } from 'react-native';
import { CardSection, Card, Button, Input } from './common/index';
export default class LoginForm extends React.Component {
    state = { text: '' }

    render() {
        return (
            <Card>
                <CardSection> 
                    <Input 
                        value= {this.state.text}
                        onChangeText={text => this.setState({ text })}
                        label='Email'
                    />
                </CardSection>
                <CardSection />
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}