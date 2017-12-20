import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.headerStyle}>
                <Text style={this.props.fontStyle}> 
                    {this.props.headerName}
                </Text>
            </View>
            
        );
    }
}

export { Header };