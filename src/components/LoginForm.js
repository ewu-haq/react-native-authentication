import React from 'react';
import { View } from 'react-native';
import { CardSection, Card, Button } from './common/index';
export default class LoginForm extends React.Component {
    render() {
        return (
            <Card>
                <CardSection />
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