import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({ size, }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator
                size={size || 'large'} // by default, it's large
            />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justtifyContent: 'center',
        justifyItems: 'center'
    }
}

export { Spinner };